import { Theme } from '@radix-ui/themes';
import { Router } from './router';

import styles from './App.module.scss';
import { Suspense } from 'react';
import { SpinnerSuspense } from './common';

export default function App() {
  return (
    <Suspense fallback={<SpinnerSuspense />}>
      <Theme appearance="dark" className={styles.theme__wrapper}>
        <Router />
      </Theme>
    </Suspense>
  );
}
