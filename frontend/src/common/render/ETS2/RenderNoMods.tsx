import { Callout, Link } from '@radix-ui/themes';

export const RenderNoMods = () => {
  return (
    <Callout.Root color="blue">
      <Callout.Text>
        There are currently <Link href="#">no mods</Link> in this section.
      </Callout.Text>
    </Callout.Root>
  );
};
