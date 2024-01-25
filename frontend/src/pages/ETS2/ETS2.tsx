import { Box, Container, Tabs, Text } from '@radix-ui/themes';
import { Header } from '../../common/header/Header';

// import styles from './ETS2.module.scss';
import { ImagesCarousel } from '../../common';

export const ETS2 = () => {
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
              <Text size="2">Make changes to your account.</Text>
            </Tabs.Content>

            <Tabs.Content value="vehicles">
              <Text size="2">Access and update your documents.</Text>
            </Tabs.Content>

            <Tabs.Content value="graphics">
              <Text size="2">
                Edit your profile or update contact information.
              </Text>
            </Tabs.Content>

            <Tabs.Content value="other">
              <Text size="2">
                Edit your profile or update contact information.
              </Text>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </Container>
    </Container>
  );
};
