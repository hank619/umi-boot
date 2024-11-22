/*
 * @Author: Hong.Zhang
 * @Date: 2023-11-09 14:27:10
 * @Description:
 */
export default [
  {
    path: '/',
    component: '@/customLayout/index.tsx',
    routes: [
      {
        path: '/',
        redirect: '/welcome',
      },
      {
        path: '/welcome',
        component: '@/pages/Welcome',
      },
      { path: '/*', component: '@/pages/404' },
    ],
  },
];
