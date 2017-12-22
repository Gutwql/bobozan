/**
 * @file detail router
 * @author wql(770185288@qq.com)
 */

import Detail from '@/pages/detail/Detail.vue';

export default {
    routes: [
        {
            path: '/detail/:id',
            name: 'detail',
            component: Detail,
            meta: {
                notKeepAlive: true
            }
        }
    ]
};
