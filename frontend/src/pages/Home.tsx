import { Container, Image } from "react-bootstrap";
import Navigation from "../components/Navigation";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navigation />
      <div className="main-container bg-dark">
        <h1 className="main-header">The site is under maintenance</h1>
        <Container className="main-image-container">
          <Image
            src="../src/assets/main_image.jpg"
            alt="greeting"
            className="main-image"
            rounded
          />
        </Container>
        <footer className="footer-copyright">
          Online Billionaires Club (OBC)
        </footer>
      </div>
    </>
  );
};

export default Home;
