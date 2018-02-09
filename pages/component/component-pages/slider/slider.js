// pages/component/component-pages/slider/slider.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1: 50,
    value2: 50
  },

  changeHandle: function(e) {
    this.setData({
      value1: e.detail.value
    })
  },

  changingHandle: function (e) {
    this.setData({
      value2: e.detail.value
    })
  }
})