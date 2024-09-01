import { appTools, defineConfig } from '@modern-js/app-tools';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

const PORT = 3000;
const MODULE_NAME = 'auth_remotes';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  dev: {
    port: PORT,
    assetPrefix: true,
  },
  server: {
    port: PORT,
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      /**
       * Set name for the module in the output
       */
      if (config.output) {
        config.output.uniqueName = MODULE_NAME;
      }

      /**
       * Add the ModuleFederationPlugin as the last plugin
       */
      appendPlugins([
        new ModuleFederationPlugin({
          name: MODULE_NAME,
          exposes: {},
          shared: ['react', 'react-dom'],
        }),
      ]);
    },
  },
  plugins: [
    appTools({
      bundler: 'experimental-rspack',
    }),
  ],
});
