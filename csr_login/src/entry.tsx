import { createRoot } from '@modern-js/runtime/react';
import { render } from '@modern-js/runtime/browser';
import '@radix-ui/themes/styles.css';

const ModernRoot = createRoot();

render(<ModernRoot />, 'root');
