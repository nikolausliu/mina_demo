Page({
  data: {
    list: [{
      id: 'view',
      name: '视图容器',
      open: false,
      pages: ['view', 'scroll-view', 'swiper']
    },{
      id: 'content',
      name: '基础内容',
      open: false,
      pages: ['text', 'icon', 'progress']
    },{
      id: 'form',
      name: '表单组件',
      open: false,
      pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch', 'textarea']
    },{
      id: 'nav',
      name: '导航',
      open: false,
      pages: ['navigator']
    },{
      id: 'media',
      name: '媒体组件',
      open: false,
      pages: ['image', 'audio', 'video']
    },{
      id: 'map',
      name: '地图',
      open: false,
      pages: ['map']
    },{
      id: 'canvas',
      name: '画布',
      open: false,
      pages: ['canvas']
    }]
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
  onShow: function(){
    console.log(`当前页面路由为 ${this.route},页面栈为 `, getCurrentPages())
  }
})
