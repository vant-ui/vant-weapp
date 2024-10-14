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
            currentValue: this.format(this.data.value).newValue,
        });
    },
    methods: {
        observeValue() {
            const { value } = this.data;
            this.setData({ currentValue: this.format(value).newValue });
        },
        check() {
            const { newValue } = this.format(this.data.currentValue);
            if (!equal(newValue, this.data.currentValue)) {
                this.setData({ currentValue: newValue });
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
            const data = this.format(event.detail.value);
            this.setData({ currentValue: data.newValue });
            this.emitChange(data);
            this.$emit('blur', Object.assign(Object.assign({}, event.detail), { value: +data.newValue }));
        },
        // filter illegal characters
        filter(value) {
            value = String(value).replace(/[^0-9.-]/g, '');
            if (this.data.integer && value.indexOf('.') !== -1) {
                value = value.split('.')[0];
            }
            return value;
        },
        format(value) {
            // filter illegal characters and format integer
            const safeValue = this.filter(value);
            // format range
            const rangeValue = Math.max(Math.min(this.data.max, +safeValue), this.data.min);
            // format decimal
            const newValue = isDef(this.data.decimalLength)
                ? rangeValue.toFixed(this.data.decimalLength)
                : String(rangeValue);
            return { value, newValue };
        },
        onInput(event) {
            const { value = '' } = event.detail || {};
            // allow input to be empty
            if (value === '') {
                return;
            }
            const formatted = this.format(value);
            this.emitChange(formatted);
        },
        emitChange(data) {
            const { value, newValue } = data;
            if (!this.data.asyncChange) {
                // fix when input 11. parsed to 11, unable to enter decimal
                this.setData({ currentValue: +value === +newValue ? value : newValue });
            }
            this.$emit('change', +newValue);
        },
        onChange() {
            const { type } = this;
            if (this.isDisabled(type)) {
                this.$emit('overlimit', type);
                return;
            }
            const diff = type === 'minus' ? -this.data.step : +this.data.step;
            const value = this.format(String(add(+this.data.currentValue, diff)));
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
