import { Button, Card } from 'react-bootstrap';
import modsStore from '../../data/mods';
import { Badge, Dialog, Flex } from '@radix-ui/themes';
import RenderVehicleStats from '../stats/RenderVehicleStats';

import styles from './RenderAllETSMods.module.scss';
import { Link } from 'react-router-dom';
import RenderOtherStats from '../stats/RenderOtherStats';
import { RenderNoMods } from './RenderNoMods';

const RenderAllETSMods = () => {
  if (modsStore.ets2.length === 0) {
    return <RenderNoMods />;
  }
  return modsStore.ets2.map((mod) => {
    const {
      id,
      type,
      name,
      link,
      // author,
      trusted,
      version,
      // status,
      stats,
      image,
    } = mod;

    const defineStatsRenderType = (type: string) => {
      return type === 'car'
        ? RenderVehicleStats(stats)
        : RenderOtherStats(stats);
    };

    return (
      <Dialog.Root>
        <Dialog.Trigger>
          <Card
            id={`card-${id}`}
            className={styles.card}
            style={{ width: '18rem' }}
            data-bs-theme="dark"
          >
            <Card.Img
              variant="top"
              src={image}
              className={styles.card__image}
            />
            <Card.Body>
              {trusted && (
                <Badge mb="2" mr="2" color="green">
                  Trusted
                </Badge>
              )}
              <Badge>{version}</Badge>
              <Card.Title>{name}</Card.Title>
            </Card.Body>
          </Card>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: 450 }}>
          <Dialog.Title>{name}</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Vehicle Stats:
          </Dialog.Description>

          {defineStatsRenderType(type)}

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Go Back
              </Button>
            </Dialog.Close>
            <Link to={link}>
              <Button>Download</Button>
            </Link>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    );
  });
};

export default RenderAllETSMods;
