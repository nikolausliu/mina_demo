// pages/component/component-pages/checkbox/checkbox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    checkedValue: ''
  },

  changeHandle: function(e) {
    console.log(e);
    this.setData({
      checkedValue: e.detail.value.join(',')
    });
  }
  
})