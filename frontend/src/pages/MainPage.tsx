import { Container, Flex, Heading } from '@radix-ui/themes';
import { OBCLogo } from '../common/icons/OBCLogo';

import './MainPage.scss';

const MainPage = () => {
  return (
    <Container>
      <Flex gap="3" justify="between" align="center">
        <OBCLogo />
        <span>OBC ModManager</span>
      </Flex>
      <Container pt="6">
        <Heading align="center" mb="6">
          Welcome to the OBC Mod Manager!
        </Heading>
        <img src="../public/banner.jpg" className="img__banner" />
      </Container>
    </Container>
  );
};

export default MainPage;
