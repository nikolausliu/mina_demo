Page({

  /**
   * 页面的初始数据
   */
  data: {
    swipers: [
      { background: 'bc_green', text: 'A', id: 0 },
      { background: 'bc_red', text: 'B', id: 1 },
      { background: 'bc_blue', text: 'C', id: 2 }
    ],
    indicatorDots: true,
    indicatorColor: 'rgba(0, 0, 0, .3)',
    indicatorActiveColor: '#000',
    autoPlay: false,
    current: 0,
    currentItemId: '',
    interval: 2000,
    duration: 500,
    circular: false,  // 是否采用衔接滑动
    vertical: false,  // 滑动方向是否为纵向
    previousMargin: '0px',  // 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
    nexMargin: '0px', // 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
    displayMultipleItems: 1,  // 同时显示的滑块数量
    skipHiddenItemLayout: false,  // 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息
    bindChange: function () { },  // current 改变时会触发 change 事件，event.detail = {current: current, source: source}
    bindanimationfinish: function () { } // 动画结束时会触发 animationfinish 事件，event.detail 同上
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  switch1Change: function(e){
    this.setData({
      indicatorDots: e.detail.value
    });
  },
  switch2Change: function (e) {
    this.setData({
      autoplay: e.detail.value
    });
  },
  switch3Change: function (e) {
    this.setData({
      circular: e.detail.value
    });
  },
  switch4Change: function (e) {
    this.setData({
      vertical: e.detail.value
    });
  },
  changeDuration: function (e) {
    this.setData({
      duration: e.detail.value
    });
  },
  changeInterval: function (e) {
    this.setData({
      interval: e.detail.value
    });
  },
  changeMargin: function(e) {
    this.setData({
      previousMargin: e.detail.value,
      nextMargin: e.detail.value
    });
  },
  changeMultipleItems: function (e) {
    this.setData({
      displayMultipleItems: e.detail.value
    });
  },
  changeCurrent: function (e) {
    this.setData({
      current: e.detail.value
    });
  },
  changeHandle: function(e) {
    console.log('bindchange的事件对象：', e);
  },
  animationfinishHandle: function (e) {
    console.log('bindanimationfinish的事件对象：', e);
  }
})