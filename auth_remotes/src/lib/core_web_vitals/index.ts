import { onLCP, onINP, onCLS } from 'web-vitals';

export const launchCoreWebVitals = ({
  debug = false,
  customLogger = console.log,
}) => {
  onCLS(customLogger, {
    reportAllChanges: debug,
  });
  onINP(customLogger, {
    reportAllChanges: debug,
  });
  onLCP(customLogger, {
    reportAllChanges: debug,
  });
  console.log("ON");
};
