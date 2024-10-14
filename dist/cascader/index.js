import { VantComponent } from '../common/component';
var FieldName;
(function (FieldName) {
    FieldName["TEXT"] = "text";
    FieldName["VALUE"] = "value";
    FieldName["CHILDREN"] = "children";
})(FieldName || (FieldName = {}));
const defaultFieldNames = {
    text: FieldName.TEXT,
    value: FieldName.VALUE,
    children: FieldName.CHILDREN,
};
VantComponent({
    props: {
        title: String,
        value: {
            type: String,
        },
        placeholder: {
            type: String,
            value: '请选择',
        },
        activeColor: {
            type: String,
            value: '#1989fa',
        },
        options: {
            type: Array,
            value: [],
        },
        swipeable: {
            type: Boolean,
            value: false,
        },
        closeable: {
            type: Boolean,
            value: true,
        },
        ellipsis: {
            type: Boolean,
            value: true,
        },
        showHeader: {
            type: Boolean,
            value: true,
        },
        closeIcon: {
            type: String,
            value: 'cross',
        },
        fieldNames: {
            type: Object,
            value: defaultFieldNames,
            observer: 'updateFieldNames',
        },
        useTitleSlot: Boolean,
    },
    data: {
        tabs: [],
        activeTab: 0,
        textKey: FieldName.TEXT,
        valueKey: FieldName.VALUE,
        childrenKey: FieldName.CHILDREN,
        innerValue: '',
    },
    watch: {
        options() {
            this.updateTabs();
        },
        value(newVal) {
            this.updateValue(newVal);
        },
    },
    created() {
        this.updateTabs();
    },
    methods: {
        updateValue(val) {
            if (val !== undefined) {
                const values = this.data.tabs.map((tab) => tab.selected && tab.selected[this.data.valueKey]);
                if (values.indexOf(val) > -1) {
                    return;
                }
            }
            this.innerValue = val;
            this.updateTabs();
        },
        updateFieldNames() {
            const { text = 'text', value = 'value', children = 'children', } = this.data.fieldNames || defaultFieldNames;
            this.setData({
                textKey: text,
                valueKey: value,
                childrenKey: children,
            });
        },
        getSelectedOptionsByValue(options, value) {
            for (let i = 0; i < options.length; i++) {
                const option = options[i];
                if (option[this.data.valueKey] === value) {
                    return [option];
                }
                if (option[this.data.childrenKey]) {
                    const selectedOptions = this.getSelectedOptionsByValue(option[this.data.childrenKey], value);
                    if (selectedOptions) {
                        return [option, ...selectedOptions];
                    }
                }
            }
        },
        updateTabs() {
            const { options } = this.data;
            const { innerValue } = this;
            if (!options.length) {
                return;
            }
            if (innerValue !== undefined) {
                const selectedOptions = this.getSelectedOptionsByValue(options, innerValue);
                if (selectedOptions) {
                    let optionsCursor = options;
                    const tabs = selectedOptions.map((option) => {
                        const tab = {
                            options: optionsCursor,
                            selected: option,
                        };
                        const next = optionsCursor.find((item) => item[this.data.valueKey] === option[this.data.valueKey]);
                        if (next) {
                            optionsCursor = next[this.data.childrenKey];
                        }
                        return tab;
                    });
                    if (optionsCursor) {
                        tabs.push({
                            options: optionsCursor,
                            selected: null,
                        });
                    }
                    this.setData({
                        tabs,
                    });
                    wx.nextTick(() => {
                        this.setData({
                            activeTab: tabs.length - 1,
                        });
                    });
                    return;
                }
            }
            this.setData({
                tabs: [
                    {
                        options,
                        selected: null,
                    },
                ],
                activeTab: 0,
            });
        },
        onClose() {
            this.$emit('close');
        },
        onClickTab(e) {
            const { index: tabIndex, title } = e.detail;
            this.$emit('click-tab', { title, tabIndex });
            this.setData({
                activeTab: tabIndex,
            });
        },
        // 选中
        onSelect(e) {
            const { option, tabIndex } = e.currentTarget.dataset;
            if (option && option.disabled) {
                return;
            }
            const { valueKey, childrenKey } = this.data;
            let { tabs } = this.data;
            tabs[tabIndex].selected = option;
            if (tabs.length > tabIndex + 1) {
                tabs = tabs.slice(0, tabIndex + 1);
            }
            if (option[childrenKey]) {
                const nextTab = {
                    options: option[childrenKey],
                    selected: null,
                };
                if (tabs[tabIndex + 1]) {
                    tabs[tabIndex + 1] = nextTab;
                }
                else {
                    tabs.push(nextTab);
                }
                wx.nextTick(() => {
                    this.setData({
                        activeTab: tabIndex + 1,
                    });
                });
            }
            this.setData({
                tabs,
            });
            const selectedOptions = tabs.map((tab) => tab.selected).filter(Boolean);
            const value = option[valueKey];
            const params = {
                value,
                tabIndex,
                selectedOptions,
            };
            this.innerValue = value;
            this.$emit('change', params);
            if (!option[childrenKey]) {
                this.$emit('finish', params);
            }
        },
    },
});
