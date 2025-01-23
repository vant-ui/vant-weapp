export const basic = Behavior({
  methods: {
    $emit(
      name: string,
      detail?: Record<string, unknown>,
      options?: WechatMiniprogram.Component.TriggerEventOption
    ) {
      this.triggerEvent(name, detail, options);
    },

    set(data: Record<string, unknown>) {
      this.setData(data);

      return new Promise((resolve) => wx.nextTick(resolve));
    },

    // high performance setData
    setView(
      this: WechatMiniprogram.Component.TrivialInstance,
      data: Record<string, any>,
      callback?: () => void
    ) {
      const target: Record<string, any> = {};
      let hasChange = false;

      Object.keys(data).forEach((key) => {
        if (data[key] !== this.data[key]) {
          target[key] = data[key];
          hasChange = true;
        }
      });

      if (hasChange) {
        return this.setData(target, callback);
      }

      return callback && callback();
    },
  },
});
