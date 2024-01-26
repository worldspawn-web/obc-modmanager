import { Carousel } from 'react-bootstrap';
import styles from './ImagesCarousel.module.scss';

export const ImagesCarousel = () => {
  return (
    <Carousel className={styles.carousel}>
      <Carousel.Item className={styles.carousel__image}>
        <img src="../public/banner.jpg" alt="123" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carousel__image}>
        <img src="../public/ets2_background.jpg" alt="123" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carousel__image}>
        <img src="../public/banner.jpg" alt="123" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
