

import { SnippetsFilled } from '@ant-design/icons';
import CouponManagement from "../view/campPromotionCenter/CouponManagement"
import ActivityThemeManagement from '../view/campPromotionCenter/ActivityThemeManagement'
const menuList = [
    {
        key: '/home',
        label: '营促销中心',
        icon: <SnippetsFilled />,// 图标名称,
        children: [
            {
                key: '/couponManagement',
                label: '卡券管理',
                component:CouponManagement
            },
            {
                key: '/activityThemeManagement',
                label:'平台活动主题管理',
                component:ActivityThemeManagement
              },
        ]
    },
    // {
    //     title: '菜单一', // 菜单标题名称
    //     path: '/admin', // 对应的path
    //     icon: SnippetsFilled // 图标名称
    // },
    // {
    //     title: '菜单二',
    //     path: '/products',
    //     icon: PieChartFilled,
    //     children: [ // 子菜单列表
    //         {
    //             title: 'form',
    //             path: '/form',
    //             icon: 'bars'
    //         },
    //         {
    //             title: 'menu',
    //             path: '/menu',
    //             icon: 'tool'
    //         },
    //     ]
    // },
    // {
    //     title: '菜单三',
    //     path: '/charts',
    //     icon: ApiFilled,
    //     children: [
    //         {
    //             title: 'step',
    //             path: '/step',
    //             icon: 'bar-chart'
    //         },
    //         {
    //             title: 'tabs',
    //             path: '/tabs',
    //             icon: 'line-chart'
    //         },
    //         {
    //             title: 'table',
    //             path: '/table',
    //             icon: 'pie-chart'
    //         },
    //         {
    //             title: 'message',
    //             path: '/message',
    //             icon: 'pie-chart'
    //         }
    //     ]
    // },
    // {
    //     title: 'subnav 4',
    //     path: '/notification',
    //     icon: PieChartOutlined,
    //     children: [
    //         {
    //             title: 'progress',
    //             path: '/progress',
    //             icon: 'bar-chart'
    //         },
    //         {
    //             title: 'spin',
    //             path: '/spin',
    //             icon: 'line-chart'
    //         },
    //         {
    //             title: 'badge',
    //             path: '/badge',
    //             icon: 'pie-chart'
    //         },
    //         {
    //             title: 'button',
    //             path: '/button',
    //             icon: 'pie-chart'
    //         },
    //         {
    //             title: 'modal',
    //             path: '/modal',
    //             icon: 'pie-chart'
    //         }
    //     ]
    // }
]

export default menuList