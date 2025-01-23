import { VantComponent } from '../common/component';
import { getRect, requestAnimationFrame } from '../common/utils';
VantComponent({
    props: {
        text: {
            type: String,
            value: '',
            observer: 'init',
        },
        mode: {
            type: String,
            value: '',
        },
        url: {
            type: String,
            value: '',
        },
        openType: {
            type: String,
            value: 'navigate',
        },
        delay: {
            type: Number,
            value: 1,
        },
        speed: {
            type: Number,
            value: 60,
            observer: 'init',
        },
        scrollable: null,
        leftIcon: {
            type: String,
            value: '',
        },
        color: String,
        backgroundColor: String,
        background: String,
        wrapable: Boolean,
    },
    data: {
        show: true,
    },
    created() {
        this.resetAnimation = wx.createAnimation({
            duration: 0,
            timingFunction: 'linear',
        });
    },
    destroyed() {
        this.timer && clearTimeout(this.timer);
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            requestAnimationFrame(() => {
                Promise.all([
                    getRect(this, '.van-notice-bar__content'),
                    getRect(this, '.van-notice-bar__wrap'),
                ]).then((rects) => {
                    const [contentRect, wrapRect] = rects;
                    const { scrollable } = this.data;
                    if (contentRect == null ||
                        wrapRect == null ||
                        !contentRect.width ||
                        !wrapRect.width ||
                        scrollable === false) {
                        return;
                    }
                    if (scrollable || wrapRect.width < contentRect.width) {
                        this.initAnimation(wrapRect.width, contentRect.width);
                        this.scroll(true);
                    }
                });
            });
        },
        initAnimation(warpWidth, contentWidth) {
            const { speed, delay } = this.data;
            this.wrapWidth = warpWidth;
            this.contentWidth = contentWidth;
            // begin 0
            this.contentDuration = (contentWidth / speed) * 1000;
            // begin -wrapWidth
            this.duration = ((warpWidth + contentWidth) / speed) * 1000;
            this.animation = wx.createAnimation({
                duration: this.contentDuration,
                timingFunction: 'linear',
                delay,
            });
        },
        scroll(isInit = false) {
            this.timer && clearTimeout(this.timer);
            this.timer = null;
            this.setData({
                animationData: this.resetAnimation
                    .translateX(isInit ? 0 : this.wrapWidth)
                    .step()
                    .export(),
            });
            const duration = isInit ? this.contentDuration : this.duration;
            requestAnimationFrame(() => {
                this.setData({
                    animationData: this.animation
                        .translateX(-this.contentWidth)
                        .step({ duration })
                        .export(),
                });
            });
            this.timer = setTimeout(() => {
                this.scroll();
            }, duration + this.data.delay);
        },
        onClickIcon(event) {
            if (this.data.mode === 'closeable') {
                this.timer && clearTimeout(this.timer);
                this.timer = null;
                this.setData({ show: false });
                this.$emit('close', event.detail);
            }
        },
        onClick(event) {
            this.$emit('click', event);
        },
    },
});
