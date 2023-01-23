import Carousel from "react-bootstrap/Carousel";
import "./slider.css";
import "../global.css";
import body from "./body.svg";
import hair from "./hair.svg";
import spa from "./spa.svg";

function Slider() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <div className="slide-img">
          <img className="d-block" src={spa} alt="First slide" />
          <img className="d-block" src={hair} alt="First slide" />
        </div>
        <Carousel.Caption>
          <div className="carousel-text">
            <div className="img-text-1">
              <h4>Spa & Massage</h4>
              <p>
                Your wellness goals and the areas of preference, then unwind
                with a customized massage experience.
              </p>
              <button className="beauty-btn">READ MORE</button>
            </div>
            <div className="img-text-2">
              <h4>Body Treatments</h4>
              <p>
                Combining skin-type-specific cleansing & toning, exfoliation,
                deep-pore cleansing extractions customized treatment.
              </p>
              <button className="beauty-btn">READ MORE</button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-img">
          <img className="d-block" src={hair} alt="Second slide" />
          <img className="d-block" src={body} alt="Second slide" />
        </div>
        <Carousel.Caption>
          <div className="carousel-text">
            <div className="img-text-1">
              <h4>Body Treatments</h4>
              <p>
                Combining skin-type-specific cleansing & toning, exfoliation,
                deep-pore cleansing extractions customized treatment.
              </p>
              <button className="beauty-btn">READ MORE</button>
            </div>
            <div className="img-text-2">
              <h4>Hair & Beauty</h4>
              <p>
                Combining skin-type-specific cleansing & toning, exfoliation,
                deep-pore cleansing extractions customized treatment.
              </p>
              <button className="beauty-btn">READ MORE</button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-img">
          <img className="d-block" src={body} alt="Third slide" />
          <img className="d-block" src={spa} alt="Third slide" />
        </div>
        <Carousel.Caption>
          <div className="carousel-text">
            <div className="img-text-1">
              <h4>Hair & Beauty</h4>
              <p>
                Combining skin-type-specific cleansing & toning, exfoliation,
                deep-pore cleansing extractions customized treatment.
              </p>
              <button className="beauty-btn">READ MORE</button>
            </div>
            <div className="img-text-2">
              <h4>Spa & Massage</h4>
              <p>
                Your wellness goals and the areas of preference, then unwind
                with a customized massage experience.
              </p>
              <button className="beauty-btn">READ MORE</button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
