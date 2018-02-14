//app.js
App({
  onLaunch: function () {
    console.log('小程序启动', this)
  },
  onShow: function(){
    console.log('小程序显示')
  },
  onHide: function () {
    console.log('小程序隐藏')
  },
  onError: function (err, err2) {
    console.log(`小程序出错，错误信息:`, err, err2)
  },
  globalData: {
    userInfo: null
  }
})