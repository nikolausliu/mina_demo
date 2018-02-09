//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: `../logs/logs?date=${Date.now()}`
    })
  },
  onLoad: function (options) {
    console.log(`${this.route}页面加载完成`,this)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow: function () {
    console.log(`${this.route}页面显示`)
    console.log(`${this.route}页面栈：`, getCurrentPages())
  },
  onReady: function () {
    console.log(`${this.route}页面初次渲染完成`)
  },
  onHide: function () {
    console.log(`${this.route}页面隐藏`)
  },
  onUnload: function () {
    console.log(`${this.route}页面卸载`)
  },
  onPullDownRefresh: function(){
    console.log(`${this.route}用户下拉`)
  },
  onReachBottom: function () {
    console.log(`${this.route}页面上拉触底`)
  },
  onShareAppMessage: function () {
    console.log(`${this.route}用户点击右上角转发`)
    return {
      title: `${app.globalData.userInfo.nickName}的测试小程序`,
      path: '/index/index'
    }
  },
  onPageScroll: function (res) {
    console.log(`${this.route}页面滚动,滚动条距顶部距离为：`, res.scrollTop)
  },
  getUserInfo: function(e) {
    console.log(1, e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  printUserInfo: function () {
    console.log(this.data.userInfo)
  }
})
