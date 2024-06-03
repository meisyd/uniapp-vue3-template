import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import vitePluginUniRouter from './src/uni-simple-router/compiler';
/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [
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
    uni(),
  ],
});
