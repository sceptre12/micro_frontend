import { createRoot } from '@modern-js/runtime/react';
import { render } from '@modern-js/runtime/browser';
import { launchCoreWebVitals } from './lib/core_web_vitals';

const ModernRoot = createRoot();

render(<ModernRoot />).then(() => {
  launchCoreWebVitals({});
});
