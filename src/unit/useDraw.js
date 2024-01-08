export default function () {
    const scale = {
      width: '1',
      height: '1',
    }
    const baseWidth = 1920
    const baseHeight = 1080
    const baseProportion = parseFloat((baseWidth / baseHeight).toFixed(5))
    let drawTiming = $ref(0)
    let appRef = null
    const calcRate = () => {
      if (!appRef) {
        appRef = document.getElementById('appRef')
      }
      // 当前宽高比
      const currentRate = parseFloat((window.innerWidth / window.innerHeight).toFixed(5))
      if (appRef) {
        if (currentRate > baseProportion) {
          // 表示更宽
          scale.width = (window.innerWidth / baseWidth).toFixed(5)
          scale.height = (window.innerHeight / baseHeight).toFixed(5)
          appRef.style.transform = `scale(${scale.width}, ${scale.height}) translate(-50%, -50%)`
        } else {
          // 表示更高
          scale.height = ((window.innerWidth / baseProportion) / baseHeight).toFixed(5)
          scale.width = (window.innerWidth / baseWidth).toFixed(5)
          appRef.style.transform = `scale(${scale.width}, ${scale.height}) translate(-50%, -50%)`
        }
      }
    }
    const resize = () => {
      clearTimeout(drawTiming)
      drawTiming = setTimeout(() => {
        calcRate()
      }, 200)
    }
  
    onMounted(() => {
      calcRate()
      window.addEventListener('resize', resize)
  
      // 临时解决有滚动条的问题
      const app = document.getElementById('app').children[0]
  
      if (app) {
        app.style.width = '99vw'
  
        setTimeout(() => {
          app.style.width = '100vw'
        })
      }
    })
    onBeforeUnmount(() => {
      window.removeEventListener('resize', resize)
    })
  }




  