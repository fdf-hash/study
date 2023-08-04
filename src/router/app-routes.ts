import type { RouteRecordRaw } from 'vue-router'
// import web from './apps/web'
// import plan from './apps/plan'
// import assets from './apps/assets'
import electricity from './apps/electricity'
import work from './apps/work'




const appRoutes: RouteRecordRaw[] = [
    // ...web,
    // ...assets,
    // ...plan,
    ...work,
    ...electricity,
]

export default appRoutes