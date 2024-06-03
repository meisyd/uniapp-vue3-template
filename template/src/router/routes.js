import { __dynamicImportComponent__ } from '@/uni-simple-router';

export default [
  {
    path: '/home',
    component: __dynamicImportComponent__('@/pages/home/index.vue', {
      pageType: 'top',
    }),
  },
];
