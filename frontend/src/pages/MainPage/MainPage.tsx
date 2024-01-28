import { Container, Grid, Heading, Link } from '@radix-ui/themes';

import styles from './MainPage.module.scss';
import { Header } from '../../common/header/Header';
import { Footer } from '../../common/footer/Footer';

export const MainPage = () => {
  return (
    <>
      <div className={styles.page}>
        <Container>
          <Header />
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
              mt="9"
              mb="9"
            >
              <Link href="/ets2">
                <img
                  className={styles.category}
                  src="../src/icons/ets.png"
                  alt="Euro Truck Simulator 2"
                />
              </Link>

              <Link href="/beamng">
                <img
                  className={styles.category}
                  src="../src/icons/bea33mng.png"
                  alt="BeamNG"
                />
              </Link>

              <Link href="/gmod">
                <img
                  className={styles.category}
                  src="../src/icons/gmod1.png"
                  alt="Garry's Mod"
                />
              </Link>

              <Link href="/lethalcompany">
                <img
                  className={styles.category}
                  src="../src/icons/lethalcompany.png"
                  alt="Lethal Company"
                />
              </Link>

              <Link href="/minecraft">
                <img
                  className={styles.category}
                  src="../src/icons/minecraft.png"
                  alt="Minecraft"
                />
              </Link>

              <Link href="/software">
                <img
                  className={styles.category}
                  src="../src/icons/software.png"
                  alt="Software"
                />
              </Link>
            </Grid>
          </Container>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
