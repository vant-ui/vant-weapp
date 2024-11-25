import { VantComponent } from '../common/component';

VantComponent({
  classes: ['info-class'],
  props: {
    dot: Boolean,
    info: null,
    size: null,
    color: String,
    customStyle: String,
    classPrefix: {
      type: String,
      value: 'van-icon',
    },
    name: String,
    useInfoSlot: Boolean,
  },

  methods: {
    onClick() {
      this.$emit('click');
    },
  },
});
