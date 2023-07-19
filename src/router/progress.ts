const createEl = (type: string, props?: any, children?: any[]) => {
  let el = document.createElement(type)
  if (props) {
    Object.keys(props).forEach(key => {
      el[key] = props[key]
    })
  }
  if (children) {
    children.forEach(child => {
      el.appendChild(child)
    })
  }
  return el
}

class ProgressBar {
  bar: null | HTMLElement = null
  body: null | HTMLElement = null
  progress = 0
  timer: any = null

  speed = 300

  constructor() {
    this.init()
  }

  setTimer() {
    if (this.progress >= 90) return
    this.progress += 10
    this.update()

    this.timer = setTimeout(() => this.setTimer(), this.speed)

    // 速度应该是越来越慢的
    this.speed += 150
  }

  private init() {
    const body = createEl('div', { className: 'router-progress__body' })
    const bar = createEl('div', { className: 'router-progress' }, [body])
    document.body.appendChild(bar)

    this.bar = bar
    this.body = body

    // 等待dom渲染完成
    setTimeout(() => {
      this.setTimer()
    })
  }

  /** 销毁 */
  private destroy() {
    this.bar && document.body.removeChild(this.bar)
    this.bar = null
  }

  /** 结束 */
  end() {
    this.progress = 100
    clearTimeout(this.timer)

    setTimeout(() => {
      this.update()

      setTimeout(() => {
        this.destroy()
      }, 300)
    })
  }

  /** 更新视图 */
  update() {
    if (this.body) {
      this.body.style.width = this.progress + '%'
    }
  }
}

let pb: ProgressBar | null = null
export default {
  start() {
    // 单例, 一旦实例存在则跳过
    if (pb?.bar) return
    pb = new ProgressBar()
  },

  end() {
    pb?.end()
  }
}
