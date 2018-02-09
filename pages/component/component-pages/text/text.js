// pages/component/component-pages/text/text.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '',
    canAdd: true, // 可添加标志
    canRemove: false  // 可移除标志
  },
  extraLine: [],
  num: 0,
  logs: ['2011年1月，微信1.0发布',
    '同年5月，微信2.0语音对讲发布',
    '10月，微信3.0新增摇一摇',
    '2012年3月，微信用户突破1亿',
    '4月份，微信4.0朋友圈发布',
    '同年7月，微信4.2发布公众平台',
    '2013年8月，微信5.0发布微信支付',
    '2014年9月，企业号发布',
    '同年，发布微信卡包',
    '2015年1月，微信第一条朋友圈广告',
    '2016年1月，企业微信发布',
    '2017年1月，小程序发布'],

  add: function () {
    // 先向预备数组里添加一项
    if (this.data.canAdd) {
      this.extraLine.push(this.logs[this.num]);
    }
    // num自增
    this.num = this.num == this.logs.length ? this.logs.length : ++this.num;
    // 自增后canRemove标志变为true
    this.setData({
      canRemove: true
    });
    // 如果所有项已全部推入预备数组，则改变canAdd标志为false
    if(this.num == this.logs.length) {
      this.setData({
        canAdd: false
      });
    }
    // setData 把预备数组里的项拼接成字符串
    this.setData({
      text: this.extraLine.join('\n')
    });
  },
  remove: function () {
    if (this.data.canRemove) {
      this.extraLine.pop(this.logs[this.num]);
    }
    this.num = this.num == 0 ? 0 : --this.num;
    this.setData({
      canAdd: true
    });
    if (this.num == 0) {
      this.setData({
        canRemove: false
      });
    }
    this.setData({
      text: this.extraLine.join('\n')
    });
  }
})