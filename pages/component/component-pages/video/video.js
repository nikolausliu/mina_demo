// pages/component/component-pages/video/video.js
const util = require('../../../../utils/util.js')

Page({
  data: {
    danmuList: [{
      text: '666',
      color: util.getRandomColor(),
      time: 1
    }, {
      text: '陈独秀',
      color: util.getRandomColor(),
      time: 2
    }, {
      text: '八路军129师独立团团长李云龙他老婆杨秀芹的秀',
      color: util.getRandomColor(),
      time: 4
    }, {
      text: '66666666',
      color: util.getRandomColor(),
      time: 1
    }, {
      text: '基操，勿6，皆坐',
      color: util.getRandomColor(),
      time: 3
    }],
    autoplay: false,
    loop: false,
    muted: false,
    pageGesture: false,
    showProgress: true,
    showFullscreenBtn: true,
    showPlayBtn: true,
    showCenterPlayBtn: true,
    enableProgressGesture: true,
    danmu: ''
  },

  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
  },

  inputBlur: function (e) {
    this.setData({
      danmu: e.detail.value
    })
  },

  sendDanmu: function () {
    console.log(this.videoContext)
    console.log(util.getRandomColor())
    console.log(this.data)
    this.videoContext.sendDanmu({
      text: this.data.danmu,
      color: util.getRandomColor()
    })
  },

  mutedHandle: function (e) {
    this.setData({
      muted: e.detail.value
    })
  },

  pageGestureHandle: function (e) {
    this.setData({
      pageGesture: e.detail.value
    })
  },

  showFullscreenBtnHandle: function (e) {
    this.setData({
      showFullscreenBtn: e.detail.value
    })
  },

  enableProgressGestureHandle: function (e) {
    this.setData({
      enableProgressGesture: e.detail.value
    })
  },

  bindplay: function() {
    console.log('播放')
  },

  bindpause: function () {
    console.log('暂停')
  },

  bindended: function () {
    console.log('结束')
  },

  bindtimeupdate: function(e) {
    console.log(e)
  },

  bindfullscreenchange: function(e) {
    console.log(e)
  }
})