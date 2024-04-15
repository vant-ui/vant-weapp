import { VantComponent } from '../common/component';
import { isDef } from '../common/validator';
const LONG_PRESS_START_TIME = 600;
const LONG_PRESS_INTERVAL = 200;
// add num and avoid float number
function add(num1, num2) {
    const cardinal = Math.pow(10, 10);
    return Math.round((num1 + num2) * cardinal) / cardinal;
}
function equal(value1, value2) {
    return String(value1) === String(value2);
}
VantComponent({
    field: true,
    classes: ['input-class', 'plus-class', 'minus-class'],
    props: {
        value: {
            type: null,
        },
        integer: {
            type: Boolean,
            observer: 'check',
        },
        disabled: Boolean,
        inputWidth: String,
        buttonSize: String,
        asyncChange: Boolean,
        disableInput: Boolean,
        decimalLength: {
            type: Number,
            value: null,
            observer: 'check',
        },
        min: {
            type: null,
            value: 1,
            observer: 'check',
        },
        max: {
            type: null,
            value: Number.MAX_SAFE_INTEGER,
            observer: 'check',
        },
        step: {
            type: null,
            value: 1,
        },
        showPlus: {
            type: Boolean,
            value: true,
        },
        showMinus: {
            type: Boolean,
            value: true,
        },
        disablePlus: Boolean,
        disableMinus: Boolean,
        longPress: {
            type: Boolean,
            value: true,
        },
        theme: String,
        alwaysEmbed: Boolean,
    },
    data: {
        currentValue: '',
    },
    watch: {
        value() {
            this.observeValue();
        },
    },
    created() {
        this.setData({
            currentValue: this.format(this.data.value),
        });
    },
    methods: {
        observeValue() {
            const { value } = this.data;
            this.setData({ currentValue: this.format(value) });
        },
        check() {
            const val = this.format(this.data.currentValue);
            if (!equal(val, this.data.currentValue)) {
                this.setData({ currentValue: val });
            }
        },
        isDisabled(type) {
            const { disabled, disablePlus, disableMinus, currentValue, max, min } = this.data;
            if (type === 'plus') {
                return disabled || disablePlus || +currentValue >= +max;
            }
            return disabled || disableMinus || +currentValue <= +min;
        },
        onFocus(event) {
            this.$emit('focus', event.detail);
        },
        onBlur(event) {
            const value = this.format(event.detail.value);
            this.setData({ currentValue: value });
            this.emitChange(value);
            this.$emit('blur', Object.assign(Object.assign({}, event.detail), { value }));
        },
        // filter illegal characters
        filter(value) {
            value = String(value).replace(/[^0-9.-]/g, '');
            if (this.data.integer && value.indexOf('.') !== -1) {
                value = value.split('.')[0];
            }
            return value;
        },
        // limit value range
        format(value) {
            value = this.filter(value);
            // format range
            value = value === '' ? 0 : +value;
            value = Math.max(Math.min(this.data.max, value), this.data.min);
            // format decimal
            if (isDef(this.data.decimalLength)) {
                value = value.toFixed(this.data.decimalLength);
            }
            return value;
        },
        onInput(event) {
            const { value = '' } = event.detail || {};
            // allow input to be empty
            if (value === '') {
                return;
            }
            let formatted = this.format(value);
            this.emitChange(formatted);
        },
        emitChange(value) {
            if (!this.data.asyncChange) {
                this.setData({ currentValue: value });
            }
            this.$emit('change', value);
        },
        onChange() {
            const { type } = this;
            if (this.isDisabled(type)) {
                this.$emit('overlimit', type);
                return;
            }
            const diff = type === 'minus' ? -this.data.step : +this.data.step;
            const value = this.format(add(+this.data.currentValue, diff));
            this.emitChange(value);
            this.$emit(type);
        },
        longPressStep() {
            this.longPressTimer = setTimeout(() => {
                this.onChange();
                this.longPressStep();
            }, LONG_PRESS_INTERVAL);
        },
        onTap(event) {
            const { type } = event.currentTarget.dataset;
            this.type = type;
            this.onChange();
        },
        onTouchStart(event) {
            if (!this.data.longPress) {
                return;
            }
            clearTimeout(this.longPressTimer);
            const { type } = event.currentTarget.dataset;
            this.type = type;
            this.isLongPress = false;
            this.longPressTimer = setTimeout(() => {
                this.isLongPress = true;
                this.onChange();
                this.longPressStep();
            }, LONG_PRESS_START_TIME);
        },
        onTouchEnd() {
            if (!this.data.longPress) {
                return;
            }
            clearTimeout(this.longPressTimer);
        },
    },
});
