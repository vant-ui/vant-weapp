import { VantComponent } from '../common/component';
import { range } from '../common/utils';
import { isObj } from '../common/validator';

const DEFAULT_DURATION = 200;

VantComponent({
  classes: ['active-class'],

  props: {
    valueKey: String,
    className: String,
    itemHeight: Number,
    visibleItemCount: Number,
    initialOptions: {
      type: Array,
      value: [],
    },
    defaultIndex: {
      type: Number,
      value: 0,
      observer(value: number) {
        this.setIndex(value);
      },
    },
  },

  data: {
    startY: 0,
    offset: 0,
    duration: 0,
    startOffset: 0,
    options: [],
    currentIndex: 0,
  },

  created() {
    const { defaultIndex, initialOptions } = this.data;

    this.set({
      currentIndex: defaultIndex,
      options: initialOptions,
    }).then(() => {
      this.setIndex(defaultIndex);
    });
  },

  methods: {
    promiseSetData(data: any) {
      return new Promise<void>((resolve) => {
        this.setData(data, resolve);
      });
    },

    getCount() {
      return this.data.options.length;
    },

    onTouchStart(event: WechatMiniprogram.TouchEvent) {
      this.setData({
        startY: event.touches[0].clientY,
        startOffset: this.data.offset,
        duration: 0,
      });
    },

    onTouchMove(event: WechatMiniprogram.TouchEvent) {
      const { data } = this;
      const deltaY = event.touches[0].clientY - data.startY;
      this.setData({
        offset: range(
          data.startOffset + deltaY,
          -(this.getCount() * data.itemHeight),
          data.itemHeight
        ),
      });
    },

    onTouchEnd() {
      const { data } = this;
      if (data.offset !== data.startOffset) {
        this.setData({ duration: DEFAULT_DURATION });

        const index = range(
          Math.round(-data.offset / data.itemHeight),
          0,
          this.getCount() - 1
        );
        this.setIndex(index, true);
      }
    },

    onClickItem(event: WechatMiniprogram.TouchEvent) {
      const { index } = event.currentTarget.dataset;
      this.setIndex(index, true);
    },

    adjustIndex(index: number) {
      const { data } = this;
      const count = this.getCount();

      index = range(index, 0, count);
      for (let i = index; i < count; i++) {
        if (!this.isDisabled(data.options[i])) return i;
      }
      for (let i = index - 1; i >= 0; i--) {
        if (!this.isDisabled(data.options[i])) return i;
      }
    },

    isDisabled(option: any) {
      return isObj(option) && option.disabled;
    },

    getOptionText(option: any) {
      const { data } = this;
      return isObj(option) && data.valueKey in option
        ? option[data.valueKey]
        : option;
    },

    setIndex(index: number, userAction?: boolean) {
      const { data } = this;
      index = this.adjustIndex(index) || 0;
      const offset = -index * data.itemHeight;

      if (index !== data.currentIndex) {
        return this.promiseSetData({ offset, currentIndex: index }).then(() => {
          userAction && this.$emit('change', index);
        });
      }

      return this.set({ offset });
    },

    setValue(value: string) {
      const { options } = this.data;
      for (let i = 0; i < options.length; i++) {
        if (this.getOptionText(options[i]) === value) {
          return this.setIndex(i);
        }
      }
      return Promise.resolve();
    },

    getValue() {
      const { data } = this;
      return data.options[data.currentIndex];
    },
  },
});
