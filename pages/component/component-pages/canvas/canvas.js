// pages/component/component-pages/canvas/canvas.js
Page({
  onReady: function () {
    this.position = {
      x: 150,
      y: 150,
      vx: 2,
      vy: 2
    }
    this.drawBalls()
    this.interval = setInterval(this.drawBalls, 15)
  },
  drawBalls: function () {
    const ctx = wx.createCanvasContext('myCanvas')
    const p = this.position
    p.x += p.vx
    p.y += p.vy

    if (p.x >= 300) {
      p.vx = -2
    }
    if (p.y >= 300) {
      p.vy = -2
    }
    if (p.x <= 5) {
      p.vx = 2
    }
    if (p.y <= 5) {
      p.vy = 2
    }

    // 从左至右，从上至下绘制八个原点
    ball(p.x, p.y)
    ball(150, p.y)
    ball(300 - p.x, p.y)
    ball(p.x, 150)
    ball(300 - p.x, 150)
    ball(p.x, 300 - p.x)
    ball(150, 300 - p.x)
    ball(300 - p.x, 300 - p.y)

    ctx.draw()

    function ball(x, y) {
      ctx.beginPath()
      ctx.arc(x, y, 5, 0, 2 * Math.PI)
      ctx.setFillStyle('#00ff00')
      ctx.fill()
    }
  },
  onUnload: function () {
    clearInterval(this.interval)
  }
})