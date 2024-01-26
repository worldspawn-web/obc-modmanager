import { Flex } from '@radix-ui/themes';
import { RatingMark, FailureMark } from '..';

// TODO: change ANY type
const RenderVehicleStats = (stats: any) => {
  return (
    <section>
      <Flex gap="3">Handling: {stats[0].handling}</Flex>
      <Flex gap="3">Quality: {stats[0].quality}</Flex>
      <Flex gap="3">Tuning: {stats[0].tuning}</Flex>
      <Flex gap="3">Animations: {stats[0].animations}</Flex>
      <Flex gap="3">FPS: {stats[0].fps}</Flex>
      <Flex gap="3">Size: {stats[0].size}</Flex>
      <Flex gap="3">
        Coop: {stats[0].coop ? <RatingMark /> : <FailureMark />}
      </Flex>
    </section>
  );
};

export default RenderVehicleStats;
