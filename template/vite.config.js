import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
{{#uni_simple_router}}
import vitePluginUniRouter from './src/uni-simple-router/compiler';
{{/uni_simple_router}}
/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [
    {{#uni_simple_router}}
    vitePluginUniRouter({
      pluginPath: './uni-simple-router',
      applet: {
        enterPage: {
          style: {
            navigationStyle: 'default',
          },
        },
      },
    }),
    {{/uni_simple_router}}
    uni(),
  ],
});
