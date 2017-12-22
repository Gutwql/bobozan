/**
 * @file home router
 * @author wql(770185288@qq.com)
 */

import Home from '@/pages/home/Home.vue';
import User from '@/pages/home/User.vue';

export default {
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/home/user',
            name: 'user',
            component: User
        }
    ]
};
