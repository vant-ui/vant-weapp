import { VantComponent } from '../common/component';

VantComponent({
  props: {
    info: null,
    name: null,
    icon: String,
    dot: Boolean
  },

  simpleRelation: {
    name: 'tabbar',
    type: 'ancestor',
    current: 'tabbar-item',
  },

  data: {
    active: false,
    // hack baidu
    style: 'flex: 1;',
  },

  methods: {
    onClick() {
      if (this.parent) {
        this.parent.onChange(this);
      }
      this.$emit('click');
    },

    updateFromParent() {
      const { parent } = this;
      if (!parent) {
        return;
      }

      const index = parent.children.indexOf(this);
      const parentData = parent.data;
      const { data } = this;
      const active = (data.name || index) === parentData.active;
      const patch: { [key: string]: any } = {};

      if (active !== data.active) {
        patch.active = active;
      }
      if (parentData.activeColor !== data.activeColor) {
        patch.activeColor = parentData.activeColor;
      }
      if (parentData.inactiveColor !== data.inactiveColor) {
        patch.inactiveColor = parentData.inactiveColor;
      }

      return Object.keys(patch).length > 0
        ? this.set(patch)
        : Promise.resolve();
    }
  }
});
