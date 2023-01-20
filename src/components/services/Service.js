import "./service.css";
import "../global.css";
import maskimg from "./mask-img.svg";
import mask2img from "./mask2-img.svg";

function Services() {
  return (
    <div className="service">
      <div className="titles">
        <p className="title-1">OUR SERVICES</p>
        <div className="header">
          <p className="title-2">Creative excellence and the</p>
          <span className="title-2">unparalleled hospitality</span>
        </div>
      </div>
      <div className="service-part-1">
        <div className="mask1-img">
        <img src={maskimg} alt="" />
        </div>
        <div className="service-1">
          <div className="menu">
            <span>Deep Tissue</span>
            <span>
              from <strong>$48.00</strong>
            </span>
          </div>
          <hr className="hr-bold" />
          <span>A therapeutic massage that used for relieving muscles.</span>
          <hr />
          <div className="menu">
            <span>Body Scrub</span>
            <span>
              from <strong>$18.00</strong>
            </span>
          </div>
          <hr className="hr-bold" />
          <span>Perfect way to relieve all that unwanted stress in body.</span>
          <hr />
          <div className="menu">
            <span>Foot Massage</span>
            <span>
              from <strong>$25.00</strong>
            </span>
          </div>
          <hr className="hr-bold" />
          <span>
            Get a relaxing massage focused on your feet and lower legs.
          </span>
          <hr />
          <div className="menu">
            <span>Scalp Treatments</span>
            <span>
              from <strong>$15.00</strong>
            </span>
          </div>
          <hr className="hr-bold" />
          <span>
            Superior gray creates a rich, natural look with less fading.
          </span>
          <hr />
          <div>
            <button className="service-1-btn">GET AN APPOINTMENT</button>
          </div>
        </div>
      </div>
      <div className="service-part-2">
        <div className="service-2">
          <div className="menu">
            <span>Fertility Massage</span>
            <span>
              from <strong>$18.00</strong>
            </span>
          </div>
          <hr className="hr-bold" />
          <span>Help support reproductive health, the menstrual cycle.</span>
          <hr />
          <div className="menu">
            <span>Blemish Buster</span>
            <span>
              from <strong>$40.00</strong>
            </span>
          </div>
          <hr className="hr-bold" />
          <span>Deep cleansing facial rebalances to promote healthy skin.</span>
          <hr />
          <div className="menu">
            <span>Oxygen Facial</span>
            <span>
              from <strong>$32.00</strong>
            </span>
          </div>
          <hr className="hr-bold" />
          <span>Hydrates, tones, lifts, and adds radiance to the skin.</span>
          <hr />
          <div className="menu">
            <span>Lash Lift</span>
            <span>
              from <strong>$25.00</strong>
            </span>
          </div>
          <hr className="hr-bold" />
          <span>
            Treatment for natural lashes that can add curl and definition.
          </span>
          <hr />
          <div>
            <button className="service-2-btn">GET AN APPOINTMENT</button>
          </div>
        </div>
        <div className="mask2-img">
        <img src={mask2img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Services;
