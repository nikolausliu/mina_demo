// pages/component/component-pages/audio/audio.js
const util = require('../../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    songlist: [{
      src: 'http://dl.stream.qqmusic.qq.com/C4000039MnYb0qxYhV.m4a?fromtag=38&vkey=A9A0449B7B70B13E248B66B38FE2361C98F6EC47BACACF1DD3A42761CF969E1FF769B5AEB7A2267DF69ED6E6F1521E84678CD66FD7CF4D56&guid=2529511866',
      poster: 'https://y.gtimg.cn/music/photo_new/T002R150x150M000000MkMni19ClKG.jpg?max_age=2592000',
      name: '晴天',
      author: '周杰伦'
    }, {
      src: 'http://dl.stream.qqmusic.qq.com/C400001n4C3p1yv0FU.m4a?fromtag=38&vkey=A7CB736029416B1DFDCC9A66BB7BDD7B2B03ABC549094418858CBA4DD29112C4BE2A93630782DC2412079198029480AB459800D14666A7EF&guid=2529511866',
      poster: 'https://y.gtimg.cn/music/photo_new/T002R150x150M000000MkMni19ClKG.jpg?max_age=2592000',
      name: '以父之名',
      author: '周杰伦'
    }, {
      src: 'http://dl.stream.qqmusic.qq.com/C400001cJSWH15HNe8.m4a?fromtag=38&vkey=7EA7FD1E2B186238AEC78E0C63DE2B8CA2FA795AD5573C4225A60A2A777E92D119DADED603D01C22597F20D0E02AE98357B692779597A096&guid=2529511866',
      poster: 'http://y.gtimg.cn/music/photo_new/T001R150x150M0000025NhlN2yWrP4.jpg?max_age=2592000',
      name: '大头贴',
      author: '周杰伦'
    }],
    loop: false,
    controls: true,
    curIndex: 0,
    progress: 0,
    curTime: '00:00',
    duration: '00:00' // duration只有在timeupdate触发时才能拿到，所以这里用'00:00'来初始化
  },

  errorHandle: function (e) {
    console.log(e)
  },

  playHandle: function () {
    console.log(`正在为您播放 ${this.data.songlist[this.data.curIndex].name}`)
    wx.showToast({
      title: `正在为您播放 ${this.data.songlist[this.data.curIndex].name}`,
      icon: 'none'
    })
  },

  pauseHandle: function () {
    console.log('暂停')
    wx.showToast({
      title: '暂停',
      icon: 'none'
    })
  },

  timeupdateHandle: function (e) {
    console.log(e)
    this.setData({
      progress: parseInt((e.detail.currentTime / e.detail.duration) * 100),
      curTime: util.formatSeconds(e.detail.currentTime),
      duration: util.formatSeconds(e.detail.duration)
    })
    console.log(this.data.progress)
  },

  endedHandle: function () {
    console.log('播放结束')
    wx.showToast({
      title: '播放结束',
      icon: 'none'
    })
  },

  controlSwitch: function (e) {
    console.log(e)
    this.setData({
      controls: e.detail.value
    })
  },

  loopSwitch: function (e) {
    console.log(e)    
    this.setData({
      loop: e.detail.value
    })
  },

  next: function () {
    this.setData({
      curIndex: this.data.curIndex == this.data.songlist.length - 1 ? 0 : this.data.curIndex + 1,
      progress: 0,
      curTime: '00:00',
      duration: '00:00'
    })
    console.log('下一首', this.data)
  }
})