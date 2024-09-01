import { appTools, defineConfig } from '@modern-js/app-tools';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';

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
          exposes: {
            './web_vitals': './src/lib/core_web_vitals/index.ts',
          },
          shared: ['react', 'react-dom', './web_vitals'],
        }),
      ]);
    },
  },
  plugins: [
    tailwindcssPlugin(),
    appTools({
      bundler: 'experimental-rspack',
    }),
  ],
});
