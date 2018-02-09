// pages/component/component-pages/textarea/textarea.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showConfirmBar: false
  },

  focusHandle: function(e) {
    console.log(`textarea发生了focus事件`, e.detail)
  },
  blurHandle(e) {
    console.log(`textarea发生了blur事件`, e.detail)
  },
  linechangeHandle(e) {
    console.log(`textarea发生了linechange事件`, e.detail)
  },
  inputHandle(e) {
    console.log(`textarea发生了input事件`, e.detail)
  },
  confirmHandle(e) {
    console.log(`textarea发生了confirm事件`, e.detail)
  },
})