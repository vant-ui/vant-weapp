// @ts-nocheck
import { requestAnimationFrame } from '../common/utils';
import { isObj } from '../common/validator';
const getClassNames = (name) => ({
    enter: `van-${name}-enter van-${name}-enter-active enter-class enter-active-class`,
    'enter-to': `van-${name}-enter-to van-${name}-enter-active enter-to-class enter-active-class`,
    leave: `van-${name}-leave van-${name}-leave-active leave-class leave-active-class`,
    'leave-to': `van-${name}-leave-to van-${name}-leave-active leave-to-class leave-active-class`,
});
export function transition(showDefaultValue) {
    return Behavior({
        properties: {
            customStyle: String,
            // @ts-ignore
            show: {
                type: Boolean,
                value: showDefaultValue,
                observer: 'observeShow',
            },
            // @ts-ignore
            duration: {
                type: null,
                value: 300,
            },
            name: {
                type: String,
                value: 'fade',
            },
        },
        data: {
            type: '',
            inited: false,
            display: false,
        },
        ready() {
            if (this.data.show === true) {
                this.observeShow(true, false);
            }
        },
        methods: {
            observeShow(value, old) {
                if (value === old) {
                    return;
                }
                value ? this.enureEnter() : this.enureLeave();
            },
            enureEnter() {
                if (this.enterPromise)
                    return;
                this.enterPromise = new Promise((resolve) => this.enter(resolve));
            },
            enureLeave() {
                const { enterPromise } = this;
                if (!enterPromise)
                    return;
                enterPromise
                    .then(() => new Promise((resolve) => this.leave(resolve)))
                    .then(() => {
                    this.enterPromise = null;
                });
            },
            enter(resolve) {
                const { duration, name } = this.data;
                const classNames = getClassNames(name);
                const currentDuration = isObj(duration) ? duration.enter : duration;
                if (this.status === 'enter') {
                    return;
                }
                this.status = 'enter';
                this.$emit('before-enter');
                requestAnimationFrame(() => {
                    if (this.status !== 'enter') {
                        return;
                    }
                    this.$emit('enter');
                    this.setData({
                        inited: true,
                        display: true,
                        classes: classNames.enter,
                        currentDuration,
                    });
                    requestAnimationFrame(() => {
                        if (this.status !== 'enter') {
                            return;
                        }
                        this.transitionEnded = false;
                        this.setData({ classes: classNames['enter-to'] });
                        resolve();
                    });
                });
            },
            leave(resolve) {
                if (!this.data.display) {
                    return;
                }
                const { duration, name } = this.data;
                const classNames = getClassNames(name);
                const currentDuration = isObj(duration) ? duration.leave : duration;
                this.status = 'leave';
                this.$emit('before-leave');
                requestAnimationFrame(() => {
                    if (this.status !== 'leave') {
                        return;
                    }
                    this.$emit('leave');
                    this.setData({
                        classes: classNames.leave,
                        currentDuration,
                    });
                    requestAnimationFrame(() => {
                        if (this.status !== 'leave') {
                            return;
                        }
                        this.transitionEnded = false;
                        setTimeout(() => {
                            this.onTransitionEnd();
                            resolve();
                        }, currentDuration);
                        this.setData({ classes: classNames['leave-to'] });
                    });
                });
            },
            onTransitionEnd() {
                if (this.transitionEnded) {
                    return;
                }
                this.transitionEnded = true;
                this.$emit(`after-${this.status}`);
                const { show, display } = this.data;
                if (!show && display) {
                    this.setData({ display: false });
                }
            },
        },
    });
}
