import { Container, Flex } from '@radix-ui/themes';

import styles from './PageNotFound.module.scss';
import { Header } from '../../common';

const PageNotFound = () => (
  <Container>
    <Header />
    <Flex
      align="center"
      justify="center"
      direction="column"
      className={styles.error404__wrapper}
    >
      <h1 className={styles.error404__header}>Whoops!</h1>
      <p>Looks like the page doesn't exist!</p>
      <span className={styles.error404__error}>404 Error</span>
    </Flex>
  </Container>
);

export default PageNotFound;
