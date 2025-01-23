export const commonProps: WechatMiniprogram.Component.PropertyOption = {
  value: String,
  placeholder: String,
  placeholderStyle: String,
  placeholderClass: String,
  disabled: Boolean,
  maxlength: {
    type: Number,
    value: -1,
  },
  cursorSpacing: {
    type: Number,
    value: 50,
  },
  autoFocus: Boolean,
  focus: Boolean,
  cursor: {
    type: Number,
    value: -1,
  },
  selectionStart: {
    type: Number,
    value: -1,
  },
  selectionEnd: {
    type: Number,
    value: -1,
  },
  adjustPosition: {
    type: Boolean,
    value: true,
  },
  holdKeyboard: Boolean,
};

export const inputProps: WechatMiniprogram.Component.PropertyOption = {
  type: {
    type: String,
    value: 'text',
  },
  password: Boolean,
  confirmType: String,
  confirmHold: Boolean,
  alwaysEmbed: Boolean,
};

export const textareaProps: WechatMiniprogram.Component.PropertyOption = {
  autoHeight: Boolean,
  fixed: Boolean,
  showConfirmBar: {
    type: Boolean,
    value: true,
  },
  disableDefaultPadding: {
    type: Boolean,
    value: true,
  },
};
