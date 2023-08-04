import type { RouteRecordRaw } from 'vue-router'
// import web from './apps/web'
// import plan from './apps/plan'
// import assets from './apps/assets'
import electricity from './apps/electricity'



const appRoutes: RouteRecordRaw[] = [
    // ...web,
    // ...assets,
    // ...plan,
    ...electricity
]

export default appRoutes