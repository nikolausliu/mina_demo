// pages/component/component-pages/button/button.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled: false,
    plain: false,
    loading: false,
    size: 'default'
  },
  setDisabled: function() {
    this.setData({
      disabled: !this.data.disabled
    });
  },
  setPlain: function () {
    this.setData({
      plain: !this.data.plain
    });
  },
  setLoading: function () {
    this.setData({
      loading: !this.data.loading
    });
  },
  setSize: function () {
    this.setData({
      size: this.data.size == 'default' ? 'mini' : 'default'
    });
    console.log(this.data)    
  }
})