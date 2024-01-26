import { Flex } from '@radix-ui/themes';
import { OBCLogo } from '..';

export const Header = () => {
  return (
    <Flex gap="3" justify="between" align="center" mt="3">
      <OBCLogo />
      <span>OBC ModManager</span>
    </Flex>
  );
};
