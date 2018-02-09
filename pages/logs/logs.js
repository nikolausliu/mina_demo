//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function (options) {
    console.log(`${this.route}页面加载完成`, this)
    console.log('options为：', options.date)
    // 异步请求，下面的三个打印会在onReady之后执行
    // wx.getStorageInfo({
    //   success: function(res) {
    //     console.log(res.keys)
    //     console.log(res.currentSize)
    //     console.log(res.limitSize)
    //   },
    // })
    // 如果用同步请求
    var res = wx.getStorageInfoSync()
    console.log(res.keys)
    console.log(res.currentSize)
    console.log(res.limitSize)

    this.refreshData()
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
  onPullDownRefresh: function () {
    console.log(`${this.route}用户下拉`)
  },
  onReachBottom: function () {
    console.log(`${this.route}页面上拉触底`)
  },
  onShareAppMessage: function () {
    console.log(`${this.route}用户点击右上角转发`)
    return {
      title: `${app.globalData.userInfo.nickName}的测试小程序`,
      path: '/logs/logs'
    }
  },
  onPageScroll: function (res) {
    console.log(`${this.route}页面滚动,滚动条距顶部距离为：`, res.scrollTop)
  },
  refreshData: function(){
    console.log('更新了数据')
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((log, index) => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
