import { Flex } from '@radix-ui/themes';
import { OBCLogo } from '..';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Flex gap="3" justify="between" align="center" mt="3">
      <Link to="/">
        <OBCLogo />
      </Link>

      <img src="../src/icons/logo-long.png" />
    </Flex>
  );
};
