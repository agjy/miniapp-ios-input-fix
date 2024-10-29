Component({
  externalClasses: ['extend-class'],
  properties: {
    type: {
      type: String,
      value: 'text',
    },
    focus: {
      type: Boolean,
      value: false,
    },
    cursor: {
      type: Number,
      value: -1,
    },
    value: String,
    autoFocus: {
      type: Boolean,
      value: false,
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    maxlength: {
      type: Number,
      value: 140,
    },
    placeholder: String,
    placeholderStyle: String,
    placeholderClass: String,
    confirmType: {
      type: String,
      value: 'done',
    },
    confirmHold: {
      type: Boolean,
      value: false,
    },
    holdKeyboard: {
      type: Boolean,
      value: false,
    },
    cursorSpacing: {
      type: Number,
      value: 0,
    },
    adjustPosition: {
      type: Boolean,
      value: true,
    },
    selectionStart: {
      type: Number,
      value: -1,
    },
    selectionEnd: {
      type: Number,
      value: -1,
    },
    alwaysEmbed: {
      type: Boolean,
      value: false,
    },
    password: {
      type: Boolean,
      value: false
    }
  },
  data: {
    currentDisAble: false,  // 当前输入框是否禁用
    currentFocus: false,  // 当前输入框是否聚焦
    isIOS: false, // 是否ios环境
  },
  lifetimes: {
    attached() {
      var systemInfo = wx.getSystemInfoSync();
      this.data.isIOS = systemInfo.platform === 'ios';
      // 为ios环境时默认禁用输入框
      this.setData({
        currentDisAble: this.data.isIOS
      })
    }
  },
  methods: {
    onInput(e) {
      this.triggerEvent('input', e.detail);
    },
    onClickInput(e) {
      this.triggerEvent('tap', e.detail);
    },
    onBlur(e) {
      this.triggerEvent('blur', e.detail);
      // ios环境时输入框失去焦点时，默认禁用输入框
      if (this.data.isIOS) {
        this.setData({
          currentDisAble: true,
          currentFocus: false
        })
      }
    },
    onFocus(e) {
      this.triggerEvent('focus', e.detail);
    },
    onConfirm(e) {
      this.triggerEvent('confirm', e.detail);
    },
    onKeyboardHeightChange(e) {
      this.triggerEvent('keyboardheightchange', e.detail);
    },
    onBindNicknameReview(e) {
      this.triggerEvent('nicknamereview', e.detail);
    },
    handleWrapTap() {
      // ios环境时点击输入框外层view，取消禁用当前输入框并聚焦当前输入框
      if (this.data.isIOS) {
        this.setData({
          currentDisAble: false
        }, () => {
          setTimeout(() => {
            this.setData({
              currentFocus: true
            })
          }, 20)
        })
      }
    }
  },
});
