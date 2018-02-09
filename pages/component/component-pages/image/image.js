// pages/component/component-pages/image/image.js
const util = require('../../../../utils/util.js')

const page = Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{
      mode: 'scaleToFill',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    }, {
      mode: 'aspectFit',
      text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
    }, {
      mode: 'aspectFill',
      text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
    }, {
      mode: 'widthFix',
      text: 'widthFix：保持纵横比缩放图片,宽度不变，高度自动变化'
    }, {
      mode: 'top',
      text: 'top：不缩放图片，只显示图片的顶部区域'
    }, {
      mode: 'bottom',
      text: 'bottom：不缩放图片，只显示图片的底部区域'
    }, {
      mode: 'center',
      text: 'center：不缩放图片，只显示图片的中间区域'
    }, {
      mode: 'left',
      text: 'left：不缩放图片，只显示图片的左边区域'
    }, {
      mode: 'right',
      text: 'right：不缩放图片，只显示图片的右边边区域'
    }, {
      mode: 'top left',
      text: 'top left：不缩放图片，只显示图片的左上边区域'
    }, {
      mode: 'top right',
      text: 'top right：不缩放图片，只显示图片的右上边区域'
    }, {
      mode: 'bottom left',
      text: 'bottom left：不缩放图片，只显示图片的左下边区域'
    }, {
      mode: 'bottom right',
      text: 'bottom right：不缩放图片，只显示图片的右下边区域'
    }],

    errImg: {
      src: './err-1.jpg',
      defSrc: '../../../../images/wechat1.jpg'
    },

    errImgArr: [{
      src: './err-2.jpg',
      defSrc: '../../../../images/wechat1.jpg'
    }, {
      src: './err-3.jpg',
      defSrc: '../../../../images/wechat2.jpg'
    }],

    errImgArr2: [{
      src: './err-4.jpg'
    }, {
      src: './err-5.jpg'
    }]
  },

  errImgHandle: function (e) {
    console.log(e)
    const defSrc = e.target.dataset.defSrc
    const errImg = this.data.errImg
    errImg.src = defSrc
    this.setData({
      errImg: errImg
    })
    console.log(this.data.errImg)
  },

  errImgHandle2: function (e) {
    console.log(e)
    const defSrc = e.target.dataset.defSrc  // 这里是每张图片都定义了错误时的默认图片，实际情况默认图片可能是一致的，可以直接写静态路径
    const index = e.target.dataset.index  // 获取下标比较关键
    const errImgArr = this.data.errImgArr
    errImgArr[index].src = defSrc
    this.setData({
      errImgArr: errImgArr
    })
    console.log(this.data.errImgArr)
  },

  errImgHandle3: function (e) {
    var _context = this
    util.errImgHandle(e, _context, 'errImgArr2', 'src', '../../../../images/wechat1.jpg')
    console.log(this.data)
  },

  loadHandle: function (e) {
    console.log(e)
  }
})

