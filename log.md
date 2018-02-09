# 问题记录&踩坑
- 官方demo中未展示的组件： [movable-view, cover-view, rich-text, picker-view, camera, live-player, live-pusher]
- 小程序首页收起展开效果，用max-height做动画会有问题。表现为：收起时比展开时感觉要慢（实际上是一样快的）。因为不同列表的项数不同，要确保max-height取一个足够大的值，所以在项数较小的列表下收起动画会有一个较长的空白时间。
- checkbox-group组件只有change事件。不知道怎样在页面渲染完成时取到checkbox的值。
- input的cursor-spacing属性是指光标的下端顶点（注意不是input下边框）与键盘界面上边框的距离。该属性可取负值，也就是说键盘可以覆盖住光标。
- picker组件,mode:date.设置start和end时，开发工具上的显示和手机预览表现不一致。开发工具上表现为在指定范围外的日期可以看到和滑动，但不能被选取。
- picker组件,mode:date. fields动态设置时有bug，避免动态设置fields。
- 遇到一个不知道是不是bug的情况：数据更新了，视图没有跟着更新。表现为：audio页面，点击下一首按钮时，进度条信息本应重置，但 有时 却没有重置；可是此时打印进度条信息绑定的数据，显示为数据已被重置。