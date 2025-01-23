export const basic = Behavior({
    methods: {
        $emit(name, detail, options) {
            this.triggerEvent(name, detail, options);
        },
        set(data) {
            this.setData(data);
            return new Promise((resolve) => wx.nextTick(resolve));
        },
        // high performance setData
        setView(data, callback) {
            const target = {};
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
