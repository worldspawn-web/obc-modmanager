import { Flex } from '@radix-ui/themes';

import styles from './PageNotFound.module.scss';

const PageNotFound = () => (
  <Flex align="center" justify="center" className={styles.error404__wrapper}>
    ERROR 404
  </Flex>
);

export default PageNotFound;
