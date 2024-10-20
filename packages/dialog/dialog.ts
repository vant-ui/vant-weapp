let queue: WechatMiniprogram.Component.TrivialInstance[] = [];
export type Action = 'confirm' | 'cancel' | 'overlay';

type DialogContext =
  | WechatMiniprogram.Page.TrivialInstance
  | WechatMiniprogram.Component.TrivialInstance;

interface DialogOptions {
  lang?: string;
  show?: boolean;
  title?: string;
  width?: string | number | null;
  zIndex?: number;
  theme?: string;
  context?: (() => DialogContext) | DialogContext;
  message?: string;
  overlay?: boolean;
  selector?: string;
  ariaLabel?: string;
  /**
   * @deprecated use custom-class instead
   */
  className?: string;
  customStyle?: string;
  transition?: string;
  /**
   * @deprecated use beforeClose instead
   */
  asyncClose?: boolean;
  beforeClose?: null | ((action: Action) => Promise<void | boolean> | void);
  businessId?: number;
  sessionFrom?: string;
  overlayStyle?: string;
  appParameter?: string;
  messageAlign?: string;
  sendMessageImg?: string;
  showMessageCard?: boolean;
  sendMessagePath?: string;
  sendMessageTitle?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  closeOnClickOverlay?: boolean;
  confirmButtonOpenType?: string;
  confirmButtonColor?: string;
  cancelButtonColor?: string;
}

const defaultOptions: DialogOptions = {
  show: false,
  title: '',
  width: null,
  theme: 'default',
  message: '',
  zIndex: 100,
  overlay: true,
  selector: '#van-dialog',
  className: '',
  asyncClose: false,
  beforeClose: null,
  transition: 'scale',
  customStyle: '',
  messageAlign: '',
  overlayStyle: '',
  confirmButtonText: '确认',
  cancelButtonText: '取消',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  confirmButtonOpenType: '',
};

let currentOptions: DialogOptions = { ...defaultOptions };

function getContext() {
  const pages = getCurrentPages();
  return pages[pages.length - 1];
}

const Dialog = (options: DialogOptions) => {
  options = {
    ...currentOptions,
    ...options,
  };

  return new Promise<WechatMiniprogram.Component.TrivialInstance>(
    (resolve, reject) => {
      const context =
        (typeof options.context === 'function'
          ? options.context()
          : options.context) || getContext();
      const dialog = context.selectComponent(options.selector as string);

      delete options.context;
      delete options.selector;

      if (dialog) {
        dialog.setData({
          callback: (
            action: Action,
            instance: WechatMiniprogram.Component.TrivialInstance
          ) => {
            action === 'confirm' ? resolve(instance) : reject(instance);
          },
          ...options,
        });

        wx.nextTick(() => {
          dialog.setData({ show: true });
        });

        queue.push(dialog);
      } else {
        console.warn(
          '未找到 van-dialog 节点，请确认 selector 及 context 是否正确'
        );
      }
    }
  );
};

Dialog.alert = (options: DialogOptions) => Dialog(options);

Dialog.confirm = (options: DialogOptions) =>
  Dialog({
    showCancelButton: true,
    ...options,
  });

Dialog.close = () => {
  queue.forEach((dialog) => {
    dialog.close();
  });
  queue = [];
};

Dialog.stopLoading = () => {
  queue.forEach((dialog) => {
    dialog.stopLoading();
  });
};

Dialog.currentOptions = currentOptions;
Dialog.defaultOptions = defaultOptions;

Dialog.setDefaultOptions = (options: DialogOptions) => {
  currentOptions = { ...currentOptions, ...options };
  Dialog.currentOptions = currentOptions;
};

Dialog.resetDefaultOptions = () => {
  currentOptions = { ...defaultOptions };
  Dialog.currentOptions = currentOptions;
};

Dialog.resetDefaultOptions();

export default Dialog;
