Page({
  data: {
    list: [{
      id: 'open-api',
      name: '开放接口',
      open: false,
      pages: [
        { name: '微信登录', key: 'login' },
        { name: '获取用户信息', key: 'getUserInfo' },
        { name: '发起支付', key: 'requestPayment' },
        { name: '转发', key: 'onShareAppMessage' },
        { name: '转发按钮', key: 'share-button' },
        { name: '客服消息', key: 'customMessage' },
        { name: '模板消息', key: 'templateMessage' }
      ]
    }, {
      id: 'interface',
      name: '界面',
      open: false,
      pages: [
        { name: '设置界面标题', key: 'setNavigationBarTitle' },
        { name: '标题栏加载动画', key: 'navigationBarLoading' },
        { name: '页面跳转', key: 'navigate' },
        { name: '下拉刷新', key: 'pullDownRefresh' },
        { name: '创建动画', key: 'createAnimation' },
        { name: '创建绘画', key: 'createContext' },
        { name: '显示操作菜单', key: 'action-sheet' },
        { name: '显示模态弹窗', key: 'modal' },
        { name: '显示消息提示框', key: 'toast' },
      ]
    }, {
      id: 'device',
      name: '设备',
      open: false,
      pages: [
        { name: '获取手机网络状态', key: 'getNetworkType' },
        { name: '监听手机网络变化', key: 'onNetWorkStatusChange' },
        { name: '获取手机系统信息', key: 'getSystemInfo' },
        { name: '监听重力感应数据', key: 'onAccelerometerChange' },
        { name: '监听罗盘数据', key: 'onCompassChange' },
        { name: '打电话', key: 'makePhoneCall' },
        { name: '扫码', key: 'scanCode' }
      ]
    }, {
      id: 'network',
      name: '网络',
      open: false,
      pages: [
        { name: '发起一个请求', key: 'request' },
        { name: 'WebSocket', key: 'WeoSocket' },
        { name: '上传文件', key: 'uploadFile' },
        { name: '下载文件', key: 'downloadFile' }
      ]
    }, {
      id: 'location',
      name: '位置',
      open: false,
      pages: [
        { name: '获取当前位置', key: 'getLocation' },
        { name: '查看位置', key: 'openLocation' },
        { name: '使用原生地图选择位置', key: 'chooseLocation' }
      ]
    },
    {
      id: 'data',
      name: '数据',
      open: false,
      pages: [
        { name: '数据存储', key: 'storage' },
      ]
    },]
  },
  toggle: function (e) {
    const id = e.currentTarget.id, list = this.data.list
    for (let i = 0, len = list.length; i < len; i++) {
      if (id === list[i].id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setData({
      list: list
    });
  },
  onShow: function () {
    console.log(`当前页面路由为 ${this.route},页面栈为 `, getCurrentPages())
  }
})
