import type { Router } from 'vue-router'
import routerProgress from './progress'

const whiteSet = new Set([
  '/404',
  '/401',
  '/auth',
  '/ssoLogin',
  '/uploader'
])

const getLoginStatus = () => { return true}

export default function guard(router: Router) {
  router.beforeEach((to, from, next) => {
    routerProgress.start()
    let hasLogin = getLoginStatus()

    if (hasLogin) {
      return next()
    }

    // 让白名单通过
    if (whiteSet.has(to.path)) {
      return next()
    }
  })

  router.afterEach(to => {
    document.title = `${to.meta.title}`
    routerProgress.end()
  })
}
