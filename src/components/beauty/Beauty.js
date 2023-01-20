import "./beauty.css";
import "../global.css";
import spaimg from "./spa-img.svg";
import bodyimg from "./body-img.svg";
import hairimg from "./hair-img.svg";

function Beauty() {
  return (
    <div className="beauty">
      <div className="">
        <img className="beauty-img" src={spaimg} alt="" />
        <p className="spa-title">Spa & Massage</p>
        <div className="spa-info">
          <p>
            Your wellness goals and the areas of preference, then unwind with a
            customized massage experience.
          </p>
        </div>
        <button className="beauty-btn">READ MORE</button>
      </div>
      <div className="">
        <img className="beauty-img" src={hairimg} alt="" />
        <p className="hair-title">Hair & Beauty</p>
        <div className="hair-info">
          <p>
            Combining skin-type-specific cleansing & toning, exfoliation,
            deep-pore cleansing extractions customized treatment.
          </p>
        </div>
        <button className="beauty-btn">READ MORE</button>
      </div>
      <div className="">
        <img className="beauty-img" src={bodyimg} alt="" />
        <p className="body-title">Body Treatments</p>
        <div className="body-info"> 
          <p>
            Offers therapeutic benefits such as relief of muscle tension and
            increased circulation to the areas worked.
          </p>
        </div>
        <button className="beauty-btn">READ MORE</button>
      </div>
    </div>
  );
}

export default Beauty;
