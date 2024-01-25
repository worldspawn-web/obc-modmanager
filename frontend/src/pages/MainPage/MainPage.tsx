import { Container, Flex, Grid, Heading } from '@radix-ui/themes';

import styles from './MainPage.module.scss';
import { OBCLogo } from '../../common';

export const MainPage = () => {
  return (
    <div className={styles.page}>
      <Container>
        <Flex gap="3" justify="between" align="center" mt="3">
          <OBCLogo />
          <span>OBC ModManager</span>
        </Flex>
        <Container pt="6">
          <Heading align="center" mb="6">
            Welcome to the OBC Mod Manager!
          </Heading>
          <Grid
            columns="4"
            gap="8"
            width="auto"
            align="center"
            justify="center"
            className={styles.categories}
            mt="8"
            mb="8"
          >
            <a href="/ets">
              <img
                className={styles.category}
                src="../src/icons/ets.png"
                alt="Euro Truck Simulator 2"
              />
            </a>

            <a href="/beamng">
              <img
                className={styles.category}
                src="../src/icons/bea33mng.png"
                alt="BeamNG"
              />
            </a>

            <a href="/gmod">
              <img
                className={styles.category}
                src="../src/icons/gmod1.png"
                alt="Garry's Mod"
              />
            </a>

            <a href="/lethalcompany">
              <img
                className={styles.category}
                src="../src/icons/lethalcompany.png"
                alt="Lethal Company"
              />
            </a>

            <a href="/minecraft">
              <img
                className={styles.category}
                src="../src/icons/minecraft.png"
                alt="Minecraft"
              />
            </a>

            <a href="/software">
              <img
                className={styles.category}
                src="../src/icons/software.png"
                alt="Software"
              />
            </a>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default MainPage;
