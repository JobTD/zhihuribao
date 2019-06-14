import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Index from '../components/page/index.vue'
import shouCang from '../components/view/shoucang.vue'
import xiangQing from '../components/page/xiangqing.vue'
import pinLun from '../components/page/pinlun.vue'
export default new Router({
    routes: [{
            path: '/index',
            component: Index,
            children: [{
                path: 'shoucang',
                component: shouCang,
            }]
        }, {
            path: '/xiangqing/:id',
            component: xiangQing
        },
        {
            path: '/pinlun/:id',
            component: pinLun
        }
    ]
})