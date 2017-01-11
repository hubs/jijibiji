import Const from './const'
export default [
    {
        path: Const.URL_ABOUT,
        component: require('./pages/about.vue')
    },
    {
        path: Const.URL_FORM,
        component: require('./pages/form.vue')
    },
    {
        path: '/dynamic-route/blog/:blogId/post/:postId/',
        component: require('./pages/dynamic-route.vue')
    }, {
        path:Const.URL_BASE,
        component: require('./pages/index.vue')
    }
]