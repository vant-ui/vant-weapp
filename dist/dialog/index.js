import { VantComponent } from '../common/component';
import { button } from '../mixins/button';
import { GRAY, RED } from '../common/color';
import { toPromise } from '../common/utils';
VantComponent({
    mixins: [button],
    classes: ['cancle-button-class', 'confirm-button-class'],
    props: {
        show: {
            type: Boolean,
            observer(show) {
                !show && this.stopLoading();
            },
        },
        title: String,
        message: String,
        theme: {
            type: String,
            value: 'default',
        },
        confirmButtonId: String,
        className: String,
        customStyle: String,
        asyncClose: Boolean,
        messageAlign: String,
        beforeClose: null,
        overlayStyle: String,
        useSlot: Boolean,
        useTitleSlot: Boolean,
        useConfirmButtonSlot: Boolean,
        useCancelButtonSlot: Boolean,
        showCancelButton: Boolean,
        closeOnClickOverlay: Boolean,
        confirmButtonOpenType: String,
        width: null,
        zIndex: {
            type: Number,
            value: 2000,
        },
        confirmButtonText: {
            type: String,
            value: '确认',
        },
        cancelButtonText: {
            type: String,
            value: '取消',
        },
        confirmButtonColor: {
            type: String,
            value: RED,
        },
        cancelButtonColor: {
            type: String,
            value: GRAY,
        },
        showConfirmButton: {
            type: Boolean,
            value: true,
        },
        overlay: {
            type: Boolean,
            value: true,
        },
        transition: {
            type: String,
            value: 'scale',
        },
        rootPortal: {
            type: Boolean,
            value: false,
        },
    },
    data: {
        loading: {
            confirm: false,
            cancel: false,
        },
        callback: (() => { }),
    },
    methods: {
        onConfirm() {
            this.handleAction('confirm');
        },
        onCancel() {
            this.handleAction('cancel');
        },
        onClickOverlay() {
            this.close('overlay');
        },
        close(action) {
            this.setData({ show: false });
            this.closeAction = action;
        },
        onAfterLeave() {
            const { closeAction: action } = this;
            this.$emit('close', action);
            const { callback } = this.data;
            if (callback) {
                callback(action, this);
            }
        },
        stopLoading() {
            this.setData({
                loading: {
                    confirm: false,
                    cancel: false,
                },
            });
        },
        handleAction(action) {
            this.$emit(action, { dialog: this });
            const { asyncClose, beforeClose } = this.data;
            if (!asyncClose && !beforeClose) {
                this.close(action);
                return;
            }
            this.setData({
                [`loading.${action}`]: true,
            });
            if (beforeClose) {
                toPromise(beforeClose(action)).then((value) => {
                    if (value) {
                        this.close(action);
                    }
                    else {
                        this.stopLoading();
                    }
                });
            }
        },
    },
});
