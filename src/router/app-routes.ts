
  import type { RouteRecordRaw } from 'vue-router'
  import assets from './apps/assets'
import rsa from './apps/rsa'
import web from './apps/web'
import work from './apps/work'
import electricity from './apps/electricity'
import plan from './apps/plan'

  const appRoutes: RouteRecordRaw[] = [
/* 资产*/
 ...assets,
/* RSA加密*/
 ...rsa,
/* web网页*/
 ...web,
/* 工作台*/
 ...work,
/* 电费收取*/
 ...electricity,
/* 更新*/
 ...plan,
]
  export default appRoutes