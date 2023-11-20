
  import type { RouteRecordRaw } from 'vue-router'
  import assets from './apps/assets'
import rsa from './apps/rsa'
import work from './apps/work'
import web from './apps/web'
import electricity from './apps/electricity'
import plan from './apps/plan'

  const appRoutes: RouteRecordRaw[] = [
/* 资产*/
 ...assets,
/* RSA加密*/
 ...rsa,
/* 工作台*/
 ...work,
/* web网页*/
 ...web,
/* 电费收取*/
 ...electricity,
/* 新增*/
 ...plan,
]
  export default appRoutes