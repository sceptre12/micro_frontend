import { appTools, defineConfig } from '@modern-js/app-tools';
import ChunkPatchPlugin from './ChunkPatchPlugin';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  dev: {
    port: 3002,
    assetPrefix: true,
  },
  server: {
    port: 3002,
  },
  deploy: {
    microFrontend: {
      enableHtmlEntry: false,
    },
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'login',
          filename: 'remoteEntry.js',
          exposes: {
            '.': './src/exposedEntry.tsx',
            './button': './src/components/Button.tsx',
          },
          shared: {
            react: {
              singleton: true,
              requiredVersion: '18',
            },
            'react-dom': {
              singleton: true,
              requiredVersion: '18',
            },
          },
        }),

        // modern.js has default ChunkSplit strategy which will cause remoteEntry chunk can not load normally
        // user can config config.optimization?.splitChunks or delete config.optimization?.splitChunks and then use webpack default ChunkSplit strategy directly
        new ChunkPatchPlugin('login'),
      ]);

      delete config.optimization?.runtimeChunk;
    },
  },
  source: {
    /*
      Automatically generate async boundaries via Dynamic Import. 
      This allows pages to be consumed by Module Federation
    */
    enableAsyncEntry: true,
    enableCustomEntry: true,
  },
  plugins: [
    appTools({
      bundler: 'experimental-rspack',
    }),
  ],
});
