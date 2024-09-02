import { MODULE_NAME, PORT } from './globalConfig';
import { createModuleFederationConfig } from '@module-federation/modern-js';


export default createModuleFederationConfig({
  name: MODULE_NAME,
  filename: 'remoteEntry.js',
  exposes: {
    './web_vitals': './src/lib/core_web_vitals/index.ts',
  },
  shared: {
    react: { singleton: true, version: '18' },
    'react-dom': { singleton: true, version: '18' }
  },
});