import type { RouteRecordRaw } from 'vue-router'
import assets from './apps/assets'
import work from './apps/work'
import web from './apps/web'
import rsa from './apps/rsa'
import electricity from './apps/electricity'
import plan from './apps/plan'

const appRoutes: RouteRecordRaw[] = [
/* 资产*/
  ...assets,
     /* 工作台*/
  ...work,
     /* web网页*/
  ...web,
     /* RSA加密*/
  ...rsa,
     /* 水费收取*/
  ...electricity,
     /* 更新*/
  ...plan,
     ]
export default appRoutes