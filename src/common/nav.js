import dynamic from 'dva/dynamic';
import BasicLayout from '../layouts/BasicLayout';
import UserLayout from '../layouts/UserLayout';

import Notice from '../routes/Notice/Notice';
import Login from '../routes/User/Login';
import Register from '../routes/User/Register';
import RegisterResult from '../routes/User/RegisterResult';
import Analyze from '../routes/Analyze/Analyze';
import Avatar from '../routes/Avatar/Avatar';
import Carousel from '../routes/Carousel/Carousel';
import Upload from '../routes/Upload/Upload';
import Layout from '../routes/Layout/Layout';
import Test from '../routes/Test/Test';

// nav data
const data = [
  {
    component: BasicLayout,
    layout: 'BasicLayout',
    name: '首页', // for breadcrumb
    path: '/',
    children: [
      {
        name: '通知公告',
        path: 'notice',
        icon: 'notification',
        component: Notice,
      },
      {
        name: '卡片',
        path: 'analyze',
        icon: 'credit-card',
        component: Analyze,
      },
      {
        name: '用户头像',
        path: 'avatar',
        icon: 'user',
        component: Avatar,
      },
      {
        name: '走马灯',
        path: 'carousel',
        icon: 'api',
        component: Carousel,
      },
      {
        name: '上传图片',
        path: 'upload',
        icon: 'upload',
        component: Upload,
      },
      {
        name: '布局',
        path: 'layout',
        icon: 'appstore',
        component: Layout,
      },
      {
        name: '测试页',
        path: 'test',
        icon: 'smile-o',
        component: Test,
      },
    ],
  },
  {
    component: UserLayout,
    layout: 'UserLayout',
    children: [
      {
        name: '用户',
        icon: 'user',
        path: 'user',
        hide: true,
        children: [
          {
            name: '登录',
            path: 'login',
            component: Login,
          },
          {
            name: '注册',
            path: 'register',
            component: Register,
          },
          {
            name: '注册结果',
            path: 'register-result',
            component: RegisterResult,
          },
        ],
      },
    ],
  }
];

export function getNavData() {
  return data;
}

export default data;
