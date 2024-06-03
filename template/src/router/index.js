// router.js
import { createRouter } from '@/uni-simple-router';

import routes from './routes';

const router = createRouter({
  platform: process.env.VUE_APP_PLATFORM,
  routes,
});

// router.afterEach((to) => {});

export default router;
