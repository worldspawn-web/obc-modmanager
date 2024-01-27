import modsStore from '../../data/mods';
import styles from './RenderAllETSMods.module.scss';

import { Badge, Dialog, Flex } from '@radix-ui/themes';
import { Button, Card } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import RenderOtherStats from '../stats/RenderOtherStats';

export const RenderGraphicsETS = () => {
  return modsStore.ets2.map((mod) => {
    if (mod.type === 'graphics') {
      const { id, name, link, trusted, version, stats, image } = mod;

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

            {RenderOtherStats(stats)}

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
    }
  });
};
