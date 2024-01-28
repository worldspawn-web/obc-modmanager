import { Flex, Theme } from '@radix-ui/themes';
import { Spinner } from 'react-bootstrap';

import styles from './SpinnerSuspense.module.scss';

export const SpinnerSuspense = () => (
  <Theme appearance="dark">
    <Flex justify="center" align="center" className={styles.suspense__wrapper}>
      <Spinner animation="border" variant="primary" />
    </Flex>
  </Theme>
);
