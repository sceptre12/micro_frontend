import { appTools, defineConfig } from '@modern-js/app-tools';
import { withZephyr } from 'zephyr-webpack-plugin';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  dev:{
    port: 3000,
  },
  tools: {
    rspack: (config) => {
      console.log("CONFIG", config)
  
      return withZephyr({
        git: {
          name: 'Xavier Thomas',
          email: 'x.devr.space@gmail.com',
          branch: 'main',
        }
      })(config);
    },
  },
  plugins: [
    appTools({
      bundler: 'experimental-rspack',
    }),
  ],
});
