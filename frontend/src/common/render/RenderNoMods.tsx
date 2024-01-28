import { Callout, Link } from '@radix-ui/themes';
import styles from './RenderAllETSMods.module.scss';

export const RenderNoMods = () => {
  return (
    <Callout.Root color="blue">
      {/* <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon> */}
      <Callout.Text>
        There are currently <Link href="#">no mods</Link> in this section.
      </Callout.Text>
    </Callout.Root>
  );
};
