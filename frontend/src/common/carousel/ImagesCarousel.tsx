import { Carousel } from 'react-bootstrap';
import styles from './ImagesCarousel.module.scss';

export const ImagesCarousel = () => {
  return (
    <Carousel className={styles.carousel}>
      <Carousel.Item className={styles.carousel__image}>
        <img
          src="../public/banner.jpg"
          alt="123"
          className={styles.carousel__img}
        />
        <Carousel.Caption>
          <h3>Only Quality Mods</h3>
          <p>Every mod that appears here - has completed the verification.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carousel__image}>
        <img
          src="../public/ets2_background.jpg"
          alt="123"
          className={styles.carousel__img}
        />
        <Carousel.Caption>
          <h3>Easy Download</h3>
          <p>
            It doesn't matter if you want to download only one or everything. We
            got you.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carousel__image}>
        <img
          src="../public/cabin_interior.jpg"
          alt="123"
          className={styles.carousel__img}
        />
        <Carousel.Caption>
          <h3>Comfortable Deliveries</h3>
          <p>Just relax and drive through the Europe.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
