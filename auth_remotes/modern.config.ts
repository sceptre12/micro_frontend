import { appTools, defineConfig } from '@modern-js/app-tools';
import { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';
import { moduleFederationPlugin } from '@module-federation/modern-js';
import { PORT } from './globalConfig';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  server: {
    port: PORT,
  },
  source: {
    enableAsyncEntry: true,
    enableCustomEntry: true,
  },
  tools: {
    rspack: config => {
      if (config.optimization) {
        config.optimization.splitChunks = {
          ...config.optimization.splitChunks,
          cacheGroups: {
            web_vitals: {
              test: /[\\/]lib[\\/]core_web_vitals[\\/]/,
              reuseExistingChunk: true,
              name: 'web_vitals',
              chunks: 'all',
              enforce: true, // Force creation of this chunk
            },
          },
        };
      }
      return config;
    },
  },
  plugins: [
    tailwindcssPlugin(),
    appTools({
      bundler: 'experimental-rspack',
    }),
    moduleFederationPlugin(),
  ],
});
