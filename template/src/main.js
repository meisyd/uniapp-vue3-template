import {
  createSSRApp
} from "vue";
import App from "./App.vue";
{{#uni_simple_router}}
import router from '@/router';
{{/uni_simple_router}}
import lxUI from 'lx-ui';

export function createApp() {
  const app = createSSRApp(App);

  app.use(lxUI);

  return {
    app,
    {{#uni_simple_router}}
    router,
    {{/uni_simple_router}}
  };
}
