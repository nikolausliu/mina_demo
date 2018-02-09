// pages/component/component-pages/picker/picker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectorData: [
      'Javascript',
      'Java',
      'Python',
      'Php'
    ],
    selectorIndex: 0,
    selectorObjData: [{
      id: 0,
      name: 'Javascript'
    }, {
      id: 1,
      name: 'Java'
    }, {
      id: 2,
      name: 'Python'
    }, {
      id: 3,
      name: 'Php'
    }],
    selectorObjIndex: 0,

    multiData: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
    multiIndex: [0, 0, 0],

    time: '12:00',
    timeStart: '00:00',
    timeEnd: '23:59',

    date: '2018-01-25',
    dateStart: '2018-01-25',
    dateEnd: '2019-01-25'
  },

  selectorHandle: function (e) {
    this.setData({
      index: e.detail.value
    })
  },

  selectorObjHandle: function (e) {
    this.setData({
      selectorObjIndex: e.detail.value
    })
  },

  multiHandle: function (e) {
    this.setData({
      multiIndex: e.detail.value
    })
  },

  multiColumnHandle: function (e) {
    console.log(e.detail, `索引值为${e.detail.column}的列发生了改变，选取的值索引为${e.detail.value}`)
  },

  timeHandle: function (e) {
    this.setData({
      time: e.detail.value
    })
  },

  dateHandle: function (e) {
    this.setData({
      date: e.detail.value
    })
  }
})