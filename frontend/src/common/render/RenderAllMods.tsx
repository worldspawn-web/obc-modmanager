import { Button, Card } from 'react-bootstrap';
import modsStore from '../../data/mods';
import { Badge, Popover } from '@radix-ui/themes';
import RenderVehicleStats from '../stats/RenderVehicleStats';

const RenderAllMods = () => {
  return modsStore.ets2.map((mod) => {
    const {
      // type,
      name,
      link,
      // author,
      trusted,
      version,
      // status,
      stats,
      image,
    } = mod;
    return (
      <Card className="m-4" style={{ width: '18rem' }} data-bs-theme="dark">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          {trusted && (
            <Badge mb="2" color="green">
              Trusted
            </Badge>
          )}
          <Badge ml="2">{version}</Badge>
          <Card.Title>{name}</Card.Title>
          <Button variant="success" href={link} className="mr-4">
            STMods
          </Button>
        </Card.Body>
        <Popover.Root>
          <Popover.Trigger>
            <Button variant="secondary">Stats</Button>
          </Popover.Trigger>
          <Popover.Content style={{ width: '17rem' }}>
            {RenderVehicleStats(stats)}
          </Popover.Content>
        </Popover.Root>
      </Card>
    );
  });
};

export default RenderAllMods;
