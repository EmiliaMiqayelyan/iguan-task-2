import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";
import "../global.css";
import body from "./body.svg";
import mask from "./mask.svg";
import spa from "./spa.svg";

function CarouselSlide() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <div className="slide-img">
          <img className="d-block" src={spa} alt="First slide" />
          <img className="d-block" src={mask} alt="First slide" />
        </div>
        <Carousel.Caption>
          <div className="carousel-text">
            <div className="img-text-1">
              <p>SEPTEMBER 30, 2021</p>
              <svg
                width="30"
                height="4"
                viewBox="0 0 30 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1H29V3H1V1Z" stroke="#141414" stroke-width="2" />
              </svg>
              <p>PETER BERGSON</p>
              <p>How to make the make-up stay last</p>
              <span>
                Therapeutic aromatherapy can help bring balance both mentally,
                physically, and different blends.
              </span>
            </div>
            <div className="img-text-2">
              <p>SEPTEMBER 30, 2021</p>
              <svg
                width="30"
                height="4"
                viewBox="0 0 30 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1H29V3H1V1Z" stroke="#141414" stroke-width="2" />
              </svg>
              <p>CHRISTINA JOHN</p>
              <p>Experience the beauty at our beauty spa</p>
              <span>
                We’ve created a range of proprietary aromatherapy blends to
                enhance your massage or skin therapy.
              </span>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-img">
          <img className="d-block" src={body} alt="Second slide" />
          <img className="d-block" src={mask} alt="Second slide" />
        </div>
        <Carousel.Caption>
          <div className="carousel-text">
            <div className="img-text-2">
              <p>SEPTEMBER 30, 2021</p>
              <svg
                width="30"
                height="4"
                viewBox="0 0 30 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1H29V3H1V1Z" stroke="#141414" stroke-width="2" />
              </svg>
              <p>JOHN WALKER</p>
              <p>Tips to improve your body via cleansing</p>
              <span>
                Whether you’re looking to stress, boost energy, improve sleep,
                clear sinuses, or relieve a headache.
              </span>
            </div>
            <div className="img-text-2">
              <p>SEPTEMBER 30, 2021</p>
              <svg
                width="30"
                height="4"
                viewBox="0 0 30 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1H29V3H1V1Z" stroke="#141414" stroke-width="2" />
              </svg>
              <p>CHRISTINA JOHN</p>
              <p>Experience the beauty at our beauty spa</p>
              <span>
                We’ve created a range of proprietary aromatherapy blends to
                enhance your massage or skin therapy.
              </span>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-img">
          <img className="d-block" src={mask} alt="Third slide" />
          <img className="d-block" src={spa} alt="Third slide" />
        </div>
        <Carousel.Caption>
          <div className="carousel-text">
            <div className="img-text-2">
              <p>SEPTEMBER 30, 2021</p>
              <svg
                width="30"
                height="4"
                viewBox="0 0 30 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1H29V3H1V1Z" stroke="#141414" stroke-width="2" />
              </svg>
              <p>CHRISTINA JOHN</p>
              <p>Experience the beauty at our beauty spa</p>
              <span>
                We’ve created a range of proprietary aromatherapy blends to
                enhance your massage or skin therapy.
              </span>
            </div>
            <div className="img-text-1">
              <p>SEPTEMBER 30, 2021</p>
              <svg
                width="30"
                height="4"
                viewBox="0 0 30 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1H29V3H1V1Z" stroke="#141414" stroke-width="2" />
              </svg>
              <p>PETER BERGSON</p>
              <p>How to make the make-up stay last</p>
              <span>
                Therapeutic aromatherapy can help bring balance both mentally,
                physically, and different blends.
              </span>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlide;
