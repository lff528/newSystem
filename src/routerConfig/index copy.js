import CouponManagement from "./views/campPromotionCenter/CouponManagement"
import ActivityThemeManagement from "./views/campPromotionCenter/ActivityThemeManagement"
import ActivityManagement from "./views/campPromotionCenter/ActivityManagement"
import ActivityOverviewManagement from "./views/campPromotionCenter/ActivityOverviewManagement"
import DispatchCoupon from "./views/campPromotionCenter/DispatchCoupon"
import ActivityHomeSettingManagement from "./views/campPromotionCenter/ActivityHomeSettingManagement"
import ReceiveCardHistory from "./views/campPromotionCenter/ReceiveCardHistory"
import DestroyCardHistory from "./views/campPromotionCenter/DestroyCardHistory"
import MemberCardManagement from "./views/memberManagement/MemberCardManagement"
import MembershipCardPayment from "./views/memberManagement/MembershipCardPayment"
import MemberManagement from "./views/memberManagement/MemberManagement"
import BehaviorManagement from "./views/memberManagement/BehaviorManagement"
import TaskManagement from "./views/memberManagement/TaskManagement"
import IntegralManagement from "./views/memberManagement/IntegralManagement"
import Merchandise from "./views/merchandiseManagement/Merchandise"
import ViolationListingReview from "./views/merchandiseManagement/ViolationListingReview"
const  menuList = [
    {
      path: '/campPromotionCenter',
      meta: {
        title: '营促销中心'
      },
      children: [
        {
          path: '/couponManagement',
          meta: {
            title: '卡券管理'
          },
          component:CouponManagement
        //   component: () => import('@/views/campPromotionCenter/couponManagement')
        },
        {
          path: '/activityThemeManagement',
          meta: {
            title: '平台活动主题管理'
          },
          component:ActivityThemeManagement
        //   component: () => import('@/views/campPromotionCenter/activityThemeManagement')
        },
        {
          path: '/activityManagement',
          meta: {
            title: '平台活动管理'
          },
          component: ActivityManagement,
        //   component: () => import('@/views/campPromotionCenter/activityManagement')
        },
        {
          path: '/activityOverviewManagement',
          meta: {
            title: '活动营销概览'
          },
          component:ActivityOverviewManagement,
        //   component: () => import('@/views/campPromotionCenter/activityOverviewManagement')
        },
        {
          path: '/dispatchCoupon',
          meta: {
            title: '优惠券派发中心'
          },
          component:DispatchCoupon,
        //   component: () => import('@/views/campPromotionCenter/dispatchCoupon')
        },
        {
          path: '/activityHomeSettingManagement',
          meta: {
            title: '活动首页配置'
          },
          component:ActivityHomeSettingManagement
        //   component: () => import('@/views/campPromotionCenter/activityHomeSettingManagement')
        },
        {
          path: '/receiveCardHistory',
          meta: {
            title: '卡劵领取记录'
          },
          component:ReceiveCardHistory
        //   component: () => import('@/views/campPromotionCenter/receiveCardHistory')
        },
        {
          path: '/destroyCardHistory',
          meta: {
            title: '卡券核销记录'
          },
          component:DestroyCardHistory,
        //   component: () => import('@/views/campPromotionCenter/destroyCardHistory')
        }
      ]
    },
    {
      path: '/memberManagement',
      meta: {
        title: '会员管理'
      },
      children: [
        {
          path: '/platformMembershipCardManagement',
          meta: {
            title: '平台会员卡管理'
          },
          children: [
            {
              path: '/memberCardManagement',
              meta: {
                title: '会员卡管理'
              },
              component:MemberCardManagement,
            //   component: () => import('@/views/memberManagement/platformMembershipCardManagement/memberCardManagement')
            },
            {
              path: '/membershipCardPayment',
              meta: {
                title: '会员卡付费设置'
              },
              component:MembershipCardPayment,
            //   component: () => import('@/views/memberManagement/platformMembershipCardManagement/membershipCardPayment')
            }
          ]
        },
        {
          meta: {
            title: '会员信息管理'
          },
          component:MemberManagement,
          // component: () => import('@/views/memberManagement/memberManagement')
        },
        {
          path: '/behaviorManagement',
          meta: {
            title: '会员行为管理'
          },
          component:BehaviorManagement,
          // component: () => import('@/views/memberManagement/behaviorManagement')
        },
        {
          path: '/taskManagement',
          meta: {
            title: '会员任务管理'
          },
          component:TaskManagement,
        //   component: () => import('@/views/memberManagement/taskManagement')
        },
        {
          path: '/integralManagement',
          meta: {
            title: '会员积分记录'
          },
          component:IntegralManagement,
        //   component: () => import('@/views/memberManagement/integralManagement')
        }
      ]
    },
    {
      path: '/merchandiseManagement',
      meta: {
        title: '商品管理'
      },
      children: [
        {
          path: '/merchandise',
          meta: {
            title: '商品列表'
          },
          component:Merchandise
        //   component: () => import('@/views/merchandiseManagement/merchandise')
        },
        {
          path: '/violationListingReview',
          meta: {
            title: '商品违规上架审核'
          },
          component:ViolationListingReview
        //   component: () => import('@/views/merchandiseManagement/violationListingReview')
        }
      ]
    },
  ]

  export default menuList