import { nextTick } from '../common/utils';
import { VantComponent } from '../common/component';
import { commonProps, inputProps, textareaProps } from './props';
VantComponent({
    field: true,
    classes: ['input-class', 'right-icon-class', 'label-class'],
    props: Object.assign(Object.assign(Object.assign(Object.assign({}, commonProps), inputProps), textareaProps), { size: String, icon: String, label: String, error: Boolean, center: Boolean, isLink: Boolean, leftIcon: String, rightIcon: String, autosize: null, required: Boolean, iconClass: String, clickable: Boolean, inputAlign: String, customStyle: String, errorMessage: String, arrowDirection: String, showWordLimit: Boolean, errorMessageAlign: String, readonly: {
            type: Boolean,
            observer: 'setShowClear',
        }, clearable: {
            type: Boolean,
            observer: 'setShowClear',
        }, clearTrigger: {
            type: String,
            value: 'focus',
        }, border: {
            type: Boolean,
            value: true,
        }, titleWidth: {
            type: String,
            value: '6.2em',
        }, clearIcon: {
            type: String,
            value: 'clear',
        }, extraEventParams: {
            type: Boolean,
            value: false,
        } }),
    data: {
        focused: false,
        innerValue: '',
        showClear: false,
    },
    watch: {
        value(value) {
            if (value !== this.value) {
                this.setData({ innerValue: value });
                this.value = value;
                this.setShowClear();
            }
        },
        clearTrigger() {
            this.setShowClear();
        },
    },
    created() {
        this.value = this.data.value;
        this.setData({ innerValue: this.value });
    },
    methods: {
        formatValue(value) {
            const { maxlength } = this.data;
            if (maxlength !== -1 && value.length > maxlength) {
                return value.slice(0, maxlength);
            }
            return value;
        },
        onInput(event) {
            const { value = '' } = event.detail || {};
            const formatValue = this.formatValue(value);
            this.value = formatValue;
            this.setShowClear();
            return this.emitChange(Object.assign(Object.assign({}, event.detail), { value: formatValue }));
        },
        onFocus(event) {
            this.focused = true;
            this.setShowClear();
            this.$emit('focus', event.detail);
        },
        onBlur(event) {
            this.focused = false;
            this.setShowClear();
            this.$emit('blur', event.detail);
        },
        onClickIcon() {
            this.$emit('click-icon');
        },
        onClickInput(event) {
            this.$emit('click-input', event.detail);
        },
        onClear() {
            this.setData({ innerValue: '' });
            this.value = '';
            this.setShowClear();
            nextTick(() => {
                this.emitChange({ value: '' });
                this.$emit('clear', '');
            });
        },
        onConfirm(event) {
            const { value = '' } = event.detail || {};
            this.value = value;
            this.setShowClear();
            this.$emit('confirm', value);
        },
        setValue(value) {
            this.value = value;
            this.setShowClear();
            if (value === '') {
                this.setData({ innerValue: '' });
            }
            this.emitChange({ value });
        },
        onLineChange(event) {
            this.$emit('linechange', event.detail);
        },
        onKeyboardHeightChange(event) {
            this.$emit('keyboardheightchange', event.detail);
        },
        onBindNicknameReview(event) {
            this.$emit('nicknamereview', event.detail);
        },
        emitChange(detail) {
            const { extraEventParams } = this.data;
            this.setData({ value: detail.value });
            let result;
            const data = extraEventParams
                ? Object.assign(Object.assign({}, detail), { callback: (data) => {
                        result = data;
                    } }) : detail.value;
            this.$emit('input', data);
            this.$emit('change', data);
            return result;
        },
        setShowClear() {
            const { clearable, readonly, clearTrigger } = this.data;
            const { focused, value } = this;
            let showClear = false;
            if (clearable && !readonly) {
                const hasValue = !!value;
                const trigger = clearTrigger === 'always' || (clearTrigger === 'focus' && focused);
                showClear = hasValue && trigger;
            }
            this.setView({ showClear });
        },
        noop() { },
    },
});
