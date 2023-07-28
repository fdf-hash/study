import type { RouteRecordRaw } from 'vue-router'
import web from './apps/web'
import plan from './apps/plan'
import assets from './apps/assets'


const appRoutes: RouteRecordRaw[] = [
    ...web,
    ...assets,
    ...plan
]

export default appRoutes