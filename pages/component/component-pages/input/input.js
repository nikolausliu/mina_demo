// pages/component/component-pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1: '',
    focus3: false
  },

  focusHandle1: function (e) {
    console.log('focusHandle1', e)
  },

  blurHandle1: function (e) {
    console.log('blurHandle1', e)
  },

  inputHandle1: function (e) {
    this.setData({
      value1: e.detail.value
    });
  },

  inputHandle2: function (e) {
    return e.detail.value.replace(/11/g, 2);
  },

  inputHandle3: function (e) {
    if (e.detail.value.length == 6) {
      this.setData({
        focus3: false
      })
    }
  },

  confirmHandle: function (e) {
    console.log('confirmHandle', e);
  }

})