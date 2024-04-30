import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
import Image from "../img/img";
import { hero, buildingTwo, buildingThree } from "../../image";
import "./style.css";

function UncontrolledExample() {
  return (
    <Carousel className="carousel-container">
      <Carousel.Item className="carousel-container_one">
        <Image src={hero} />
      </Carousel.Item>
      <Carousel.Item className="carousel-container_two">
        <Image src={buildingTwo} />
      </Carousel.Item>
      <Carousel.Item className="carousel-container_three">
        <Image src={buildingThree} />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
