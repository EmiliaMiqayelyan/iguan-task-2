import "./footer.css";
import "../global.css";
import { useState } from "react";
import footerlogo from "./footer-logo.svg";
import { MdContentCopy } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Footer() {
  const [copied, setCopied] = useState(false);
  const copy = "24A Kingston St, Los Vegas NC 28202, USA.";

  return (
    <div className="footer-inner">
      <div className="footer">
        <div className="footer-container">
          <img src={footerlogo} alt="" />
          <div className="sites">
            <div className="sites-div">
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_522)">
                  <path
                    d="M8.71875 9L9.15625 6.125H6.375V4.25C6.375 3.4375 6.75 2.6875 8 2.6875H9.28125V0.21875C9.28125 0.21875 8.125 0 7.03125 0C4.75 0 3.25 1.40625 3.25 3.90625V6.125H0.6875V9H3.25V16H6.375V9H8.71875Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_522">
                    <rect width="10" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="sites-div">
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_530)">
                  <path
                    d="M14.3438 3.75C14.9688 3.28125 15.5312 2.71875 15.9688 2.0625C15.4062 2.3125 14.75 2.5 14.0938 2.5625C14.7812 2.15625 15.2812 1.53125 15.5312 0.75C14.9062 1.125 14.1875 1.40625 13.4688 1.5625C12.8438 0.90625 12 0.53125 11.0625 0.53125C9.25 0.53125 7.78125 2 7.78125 3.8125C7.78125 4.0625 7.8125 4.3125 7.875 4.5625C5.15625 4.40625 2.71875 3.09375 1.09375 1.125C0.8125 1.59375 0.65625 2.15625 0.65625 2.78125C0.65625 3.90625 1.21875 4.90625 2.125 5.5C1.59375 5.46875 1.0625 5.34375 0.625 5.09375V5.125C0.625 6.71875 1.75 8.03125 3.25 8.34375C3 8.40625 2.6875 8.46875 2.40625 8.46875C2.1875 8.46875 2 8.4375 1.78125 8.40625C2.1875 9.71875 3.40625 10.6562 4.84375 10.6875C3.71875 11.5625 2.3125 12.0938 0.78125 12.0938C0.5 12.0938 0.25 12.0625 0 12.0312C1.4375 12.9688 3.15625 13.5 5.03125 13.5C11.0625 13.5 14.3438 8.53125 14.3438 4.1875C14.3438 4.03125 14.3438 3.90625 14.3438 3.75Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_530">
                    <rect width="16" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="sites-div">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_526)">
                  <path
                    d="M3.125 14V4.65625H0.21875V14H3.125ZM1.65625 3.40625C2.59375 3.40625 3.34375 2.625 3.34375 1.6875C3.34375 0.78125 2.59375 0.03125 1.65625 0.03125C0.75 0.03125 0 0.78125 0 1.6875C0 2.625 0.75 3.40625 1.65625 3.40625ZM13.9688 14H14V8.875C14 6.375 13.4375 4.4375 10.5 4.4375C9.09375 4.4375 8.15625 5.21875 7.75 5.9375H7.71875V4.65625H4.9375V14H7.84375V9.375C7.84375 8.15625 8.0625 7 9.5625 7C11.0625 7 11.0938 8.375 11.0938 9.46875V14H13.9688Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_526">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="sites-div">
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_534)">
                  <path
                    d="M8.5 4.60742C6.125 4.60742 4.23242 6.53711 4.23242 8.875C4.23242 11.25 6.125 13.1426 8.5 13.1426C10.8379 13.1426 12.7676 11.25 12.7676 8.875C12.7676 6.53711 10.8379 4.60742 8.5 4.60742ZM8.5 11.6582C6.97852 11.6582 5.7168 10.4336 5.7168 8.875C5.7168 7.35352 6.94141 6.12891 8.5 6.12891C10.0215 6.12891 11.2461 7.35352 11.2461 8.875C11.2461 10.4336 10.0215 11.6582 8.5 11.6582ZM13.918 4.45898C13.918 3.90234 13.4727 3.45703 12.916 3.45703C12.3594 3.45703 11.9141 3.90234 11.9141 4.45898C11.9141 5.01562 12.3594 5.46094 12.916 5.46094C13.4727 5.46094 13.918 5.01562 13.918 4.45898ZM16.7383 5.46094C16.6641 4.125 16.3672 2.9375 15.4023 1.97266C14.4375 1.00781 13.25 0.710938 11.9141 0.636719C10.541 0.5625 6.42188 0.5625 5.04883 0.636719C3.71289 0.710938 2.5625 1.00781 1.56055 1.97266C0.595703 2.9375 0.298828 4.125 0.224609 5.46094C0.150391 6.83398 0.150391 10.9531 0.224609 12.3262C0.298828 13.6621 0.595703 14.8125 1.56055 15.8145C2.5625 16.7793 3.71289 17.0762 5.04883 17.1504C6.42188 17.2246 10.541 17.2246 11.9141 17.1504C13.25 17.0762 14.4375 16.7793 15.4023 15.8145C16.3672 14.8125 16.6641 13.6621 16.7383 12.3262C16.8125 10.9531 16.8125 6.83398 16.7383 5.46094ZM14.957 13.7734C14.6973 14.5156 14.1035 15.0723 13.3984 15.3691C12.2852 15.8145 9.6875 15.7031 8.5 15.7031C7.27539 15.7031 4.67773 15.8145 3.60156 15.3691C2.85938 15.0723 2.30273 14.5156 2.00586 13.7734C1.56055 12.6973 1.67188 10.0996 1.67188 8.875C1.67188 7.6875 1.56055 5.08984 2.00586 3.97656C2.30273 3.27148 2.85938 2.71484 3.60156 2.41797C4.67773 1.97266 7.27539 2.08398 8.5 2.08398C9.6875 2.08398 12.2852 1.97266 13.3984 2.41797C14.1035 2.67773 14.6602 3.27148 14.957 3.97656C15.4023 5.08984 15.291 7.6875 15.291 8.875C15.291 10.0996 15.4023 12.6973 14.957 13.7734Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_534">
                    <rect width="17" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-info">
          <div className="footer-info-part-1">
            <div className="explore">
              <p>Explore</p>
              <span>Home</span>
              <span>About Us</span>
              <span>Services</span>
              <span>Articles</span>
              <span>Contact Us</span>
            </div>
            <div className="pages">
              <p>Utility Pages</p>
              <span>Style Guide</span>
              <span>404 Not Found</span>
              <span>Password Protected</span>
              <span>Licenses</span>
              <span>Changelog</span>
            </div>
          </div>
          <div className="footer-info-part-2">
            <div className="contact">
              <p>Keep in Touch</p>
              <div className="contact-part">
                <span>Address :</span>
                <div className="part">
                  <span className="part-span">
                    {copy}
                    {copied ? (
                      <span className="copy-span">Copied!</span>
                    ) : (
                      <CopyToClipboard
                        text={copy}
                        onCopy={() => {
                          setCopied(true);
                          setTimeout(() => {
                            setCopied(false);
                          }, 2000);
                        }}
                      >
                        <MdContentCopy className="copy-icon" />
                      </CopyToClipboard>
                    )}
                  </span>
                </div>
              </div>
              <div className="contact-part">
                <span>Mail :</span>
                <div className="part">
                  <span className="margin-div">support@doctors.com</span>
                </div>
              </div>
              <div className="contact-part">
                <span>Phone :</span>
                <div className="part">
                  <span className="margin-part">(+22) 123 - 4567 - 900</span>
                </div>
              </div>
            </div>
            <div className="hours">
              <p>Working Hours</p>
              <span>Mon to Fri: 7am - 6pm</span>
              <span>Sat: 9am - 7pm</span>
              <span>Sun: 9am - 6pm</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>?? Drafted by VictorFlow - Powered by Webflow .</span>
      </div>
    </div>
  );
}

export default Footer;
