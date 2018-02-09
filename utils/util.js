const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * @Method 根据秒数格式化时间（eg，音乐播放时间显示，另外，这里不考虑分钟数超过两位数的情况）
 * @param s {Float} 秒数
 * @return {String} 时间格式字符串，如：01：32
 */
const formatSeconds = s => {
  const second = Math.floor(s % 60)
  const minute = Math.floor(s / 60)
  return [minute, second].map(formatNumber).join(':')
}

/**
 * @Method 图片列表错误处理
 * @param e {Object} 图片的错误对象，也就是binderror处理函数的第一个参数
 * @param context {Object} binderror处理函数的上下文对象，也就是binderror处理函数里的this，也就是Page的实例
 * @param listKey {String} 图片列表的键名
 * @param srcKey {String} 图片src属性在图片列表中的键名
 * @param defSrc {String} 默认图片路径(列表的默认图片统一配置)
 * @tips image组件上需定义 data-index,即当前图片在列表的索引。另外这个方法目前只支持固定数据结构（表现为[{src: '', xxx: xxx},{src: '', xxx: xxx}]）的列表使用，没有做更多的扩展。
 */
const errImgHandle = (e, context, listKey, srcKey, defSrc) => {
  const index = e.target.dataset.index
  const list = context.data[listKey]
  list[index][srcKey] = defSrc
  context.setData({
    [listKey]: list
  })
}

// 获取随机16进制颜色值
const getRandomColor = () => {
  const rgb = []
  for (let i = 0; i < 3; i++) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length === 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

module.exports = {
  formatTime: formatTime,
  formatSeconds: formatSeconds,
  errImgHandle: errImgHandle,
  getRandomColor: getRandomColor
}
