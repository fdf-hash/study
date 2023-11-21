
  import type { RouteRecordRaw } from 'vue-router'
  import assets from './apps/assets'
import web from './apps/web'
import work from './apps/work'
import rsa from './apps/rsa'
import plan from './apps/plan'
import electricity from './apps/electricity'

  const appRoutes: RouteRecordRaw[] = [
/* 资产*/
 ...assets,
/* web网页*/
 ...web,
/* 工作台*/
 ...work,
/* RSA加密*/
 ...rsa,
/* 更新*/
 ...plan,
/* 电费收取*/
 ...electricity,
]
  export default appRoutes