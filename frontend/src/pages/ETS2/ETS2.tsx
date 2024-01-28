import { Box, Container, Grid, Tabs } from '@radix-ui/themes';
import { Header } from '../../common/header/Header';

// import styles from './ETS2.module.scss';
import { ImagesCarousel } from '../../common';
import RenderAllETSMods from '../../common/render/RenderAllETSMods';
import { RenderVehiclesETS } from '../../common/render/RenderVehiclesETS';
import { RenderGraphicsETS } from '../../common/render/RenderGraphicsETS';
import { RenderOtherETS } from '../../common/render/RenderOtherETS';

const ETS2 = () => {
  return (
    <Container>
      <Header />
      <Container mt="8">
        <ImagesCarousel />
      </Container>
      <Container mt="8">
        <Tabs.Root defaultValue="all">
          <Tabs.List>
            <Tabs.Trigger value="all">All</Tabs.Trigger>
            <Tabs.Trigger value="vehicles">Vehicles</Tabs.Trigger>
            <Tabs.Trigger value="graphics">Graphics</Tabs.Trigger>
            <Tabs.Trigger value="other">Other</Tabs.Trigger>
          </Tabs.List>

          <Box px="4" pt="3" pb="2">
            <Tabs.Content value="all">
              <Grid mt="4" mb="2" gap="6" columns="3" justify="start">
                {RenderAllETSMods()}
              </Grid>
            </Tabs.Content>

            <Tabs.Content value="vehicles">
              <Grid mt="4" mb="2" gap="6" columns="3" justify="start">
                {RenderVehiclesETS()}
              </Grid>
            </Tabs.Content>

            <Tabs.Content value="graphics">
              <Grid mt="4" mb="2" gap="6" columns="3" justify="start">
                {RenderGraphicsETS()}
              </Grid>
            </Tabs.Content>

            <Tabs.Content value="other">
              <Grid mt="4" mb="2" gap="6" columns="3" justify="start">
                {RenderOtherETS()}
              </Grid>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </Container>
    </Container>
  );
};

export default ETS2;
