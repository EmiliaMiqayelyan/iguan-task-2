import "./customer.css";
import "../global.css";
import custom1 from "./custom-1.svg";
import custom2 from "./custom-2.svg";

function Customers() {
  return (
    <div className="customer">
      <div className="custom-title">
        <p className="title">TESTIMONIALS</p>
        <p className="header">What our Customers says...</p>
      </div>
      <div className="customers">
        <div className="customer-part-1">
          <p>
            “Made an appointment with Beautyness and it was the best experience
            in a salon I have ever had. They went above and beyond to make sure
            I got what I wanted, & patiently explained her process “
          </p>
          <div className="customer-1">
            <div className="customer-info-1">
              <img src={custom1} alt="" />
              <div className="contacts">
                <div>
                  <svg
                    width="81"
                    height="17"
                    viewBox="0 0 81 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M79.6348 6.637L74.7271 6.2185L72.809 1.75L70.8909 6.22525L65.9832 6.637L69.7101 9.82975L68.5906 14.575L72.809 12.0573L77.0274 14.575L75.9148 9.82975L79.6348 6.637ZM72.809 10.795V4.5175L73.9762 7.2445L76.9659 7.501L74.6998 9.445L75.3823 12.334L72.809 10.795Z"
                      fill="white"
                    />
                    <path
                      d="M8.19102 12.0573L12.4094 14.575L11.2899 9.82975L15.0169 6.637L10.1091 6.22525L8.19102 1.75L6.27295 6.22525L1.36517 6.637L5.09208 9.82975L3.97265 14.575L8.19102 12.0573Z"
                      fill="white"
                    />
                    <path
                      d="M24.573 12.0573L28.7914 14.575L27.672 9.82975L31.3989 6.637L26.4911 6.22525L24.573 1.75L22.655 6.22525L17.7472 6.637L21.4741 9.82975L20.3547 14.575L24.573 12.0573Z"
                      fill="white"
                    />
                    <path
                      d="M40.9551 12.0573L45.1734 14.575L44.054 9.82975L47.7809 6.637L42.8731 6.22525L40.9551 1.75L39.037 6.22525L34.1292 6.637L37.8561 9.82975L36.7367 14.575L40.9551 12.0573Z"
                      fill="white"
                    />
                    <path
                      d="M56.427 12.0573L60.6453 14.575L59.5259 9.82975L63.2528 6.637L58.345 6.22525L56.427 1.75L54.5089 6.22525L49.6011 6.637L53.328 9.82975L52.2086 14.575L56.427 12.0573Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p>James Williams</p>
                <span>United States</span>
              </div>
            </div>

            <div className="custom-img">
              <svg
                width="71"
                height="56"
                viewBox="0 0 71 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_289)">
                  <path
                    d="M70.3696 28.3639L42.7333 56.0003V0.727539H70.3696V28.3639Z"
                    fill="white"
                  />
                  <path
                    d="M27.9939 28.3639L0.357544 56.0003V0.727539H27.9939V28.3639Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_289">
                    <rect width="71" height="56" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div className="customer-part-2">
          <p>
            “I've been going to Beautyness they are always goes above and beyond
            my expectations and leaves my hair looking and feeling fantastic and
            looking exactly as I hoped, if not better “
          </p>
          <div className="customer-2">
            <div className="customer-info-2">
              <img src={custom2} alt="" />
              <div className="contacts">
                <div>
                  <svg
                    width="81"
                    height="17"
                    viewBox="0 0 81 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M79.6348 6.637L74.7271 6.2185L72.809 1.75L70.8909 6.22525L65.9832 6.637L69.7101 9.82975L68.5906 14.575L72.809 12.0573L77.0274 14.575L75.9148 9.82975L79.6348 6.637ZM72.809 10.795V4.5175L73.9762 7.2445L76.9659 7.501L74.6998 9.445L75.3823 12.334L72.809 10.795Z"
                      fill="white"
                    />
                    <path
                      d="M8.19102 12.0573L12.4094 14.575L11.2899 9.82975L15.0169 6.637L10.1091 6.22525L8.19102 1.75L6.27295 6.22525L1.36517 6.637L5.09208 9.82975L3.97265 14.575L8.19102 12.0573Z"
                      fill="white"
                    />
                    <path
                      d="M24.573 12.0573L28.7914 14.575L27.672 9.82975L31.3989 6.637L26.4911 6.22525L24.573 1.75L22.655 6.22525L17.7472 6.637L21.4741 9.82975L20.3547 14.575L24.573 12.0573Z"
                      fill="white"
                    />
                    <path
                      d="M40.9551 12.0573L45.1734 14.575L44.054 9.82975L47.7809 6.637L42.8731 6.22525L40.9551 1.75L39.037 6.22525L34.1292 6.637L37.8561 9.82975L36.7367 14.575L40.9551 12.0573Z"
                      fill="white"
                    />
                    <path
                      d="M56.427 12.0573L60.6453 14.575L59.5259 9.82975L63.2528 6.637L58.345 6.22525L56.427 1.75L54.5089 6.22525L49.6011 6.637L53.328 9.82975L52.2086 14.575L56.427 12.0573Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p>Carolyn James</p>
                <span>United Kingdom</span>
              </div>
            </div>
            <div className="custom-img">
              <svg
                width="71"
                height="56"
                viewBox="0 0 71 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_310)">
                  <path
                    d="M70.3696 28.3639L42.7333 56.0003V0.727539H70.3696V28.3639Z"
                    fill="white"
                  />
                  <path
                    d="M27.9939 28.3639L0.357544 56.0003V0.727539H27.9939V28.3639Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_310">
                    <rect width="71" height="56" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
