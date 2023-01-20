import "./blog.css";
import "../global.css";
import story1 from "./story1.svg";
import story2 from "./story2.svg";
import story3 from "./story3.svg";

function Blog() {
  return (
    <div className="blogs">
      <div className="blog-titles">
        <p className="title">OUR BLOG</p>
        <p className="header">Latest Updates</p>
      </div>
      <div className="story-part">
        <div className="story-1">
          <img src={story1} alt="" />
          <div className="story-info">
            <div className="story-header">
              <span className="">SEPTEMBER 30, 2021</span>
              <svg
                width="30"
                height="4"
                viewBox="0 0 30 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1H29V3H1V1Z" stroke="#141414" stroke-width="2" />
              </svg>
              <span>PETER BERGSON</span>
            </div>
            <p>How to make the make-up stay last</p>
            <span>
              Therapeutic aromatherapy can help bring balance both mentally,
              physically, and different blends.
            </span>
          </div>
        </div>
        <div className="story-2">
          <img src={story2} alt="" />
          <div className="story-info">
            <div className="story-header">
              <span className="">SEPTEMBER 30, 2021</span>
              <svg
                width="30"
                height="4"
                viewBox="0 0 30 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1H29V3H1V1Z" stroke="#141414" stroke-width="2" />
              </svg>
              <span>JOHN WALKER</span>
            </div>
            <p>Tips to improve your body via cleansing</p>
            <span>
              Whether you’re looking to stress, boost energy, improve sleep,
              clear sinuses, or relieve a headache.
            </span>
          </div>
        </div>
        <div className="story-3">
          <img src={story3} alt="" />
          <div className="story-info">
            <div className="story-header">
              <span className="">SEPTEMBER 30, 2021</span>
              <svg
                width="30"
                height="4"
                viewBox="0 0 30 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1H29V3H1V1Z" stroke="#141414" stroke-width="2" />
              </svg>
              <span>CHRISTINA JOHN</span>
            </div>
            <p>Experience the beauty at our beauty spa</p>
            <span>
              We’ve created a range of proprietary aromatherapy blends to
              enhance your massage or skin therapy.
            </span>
          </div>
        </div>
      </div>
      <div className="blog-btn">
        <button className="story-btn">VIEW MORE STORIES</button>
      </div>
    </div>
  );
}

export default Blog;
