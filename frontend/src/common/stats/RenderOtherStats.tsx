import { Flex, Table } from '@radix-ui/themes';
import { RatingMark, FailureMark } from '..';

// TODO: change ANY type
const RenderOtherStats = (stats: any) => {
  return (
    <Flex direction="column" gap="3">
      <Table.Root>
        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>Quality</Table.RowHeaderCell>
            <Table.Cell>{stats[0].quality}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.RowHeaderCell>FPS</Table.RowHeaderCell>
            <Table.Cell>{stats[0].fps}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.RowHeaderCell>Size</Table.RowHeaderCell>
            <Table.Cell>{stats[0].size}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.RowHeaderCell>Coop</Table.RowHeaderCell>
            <Table.Cell>
              {stats[0].coop ? <RatingMark /> : <FailureMark />}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Flex>
  );
};

export default RenderOtherStats;
