// pages/component/component-pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: false,
    disabled: false
  },

  submitHandle: function (e) {
    // 模拟异步发送请求
    const _this = this
    this.setData({
      loading: true,
      disabled: true
    })
    setTimeout(function () {
      console.log('form发生了submit事件，携带数据为，', e.detail.value)
      _this.setData({
        loading: false,
        disabled: false
      })
    }, 1000)
  },

  resetHandle: function () {
    console.log('form发生了reset事件')
  }
})