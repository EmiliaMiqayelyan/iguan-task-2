import "./discount.css";
import "../global.css";

function Discount() {
    return (
        <div className="discount">
            <div className="discount-left-part">
                <p className="discount-title">FLAT DISCOUNT</p>
                <p className="discount-header">
                    Claim upto 50% offer on the most popular services...
                </p>
                <div className="text-div">
                    <span>
                        Our Retreat is not meant to be an occasional treat, but rather a
                        part of your routine that restores balance to your daily life.
                    </span>
                </div>
                <div className="about-discount">
                    <div className="about-discount-left">
                        <div className="part1">
                            <svg
                                width="30"
                                height="6"
                                viewBox="0 0 30 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_1_428)">
                                    <path
                                        d="M27 6C28.6569 6 30 4.65685 30 3C30 1.34315 28.6569 0 27 0C25.3431 0 24 1.34315 24 3C24 4.65685 25.3431 6 27 6Z"
                                        fill="#5C8692"
                                    />
                                    <path
                                        d="M15 6C16.6569 6 18 4.65685 18 3C18 1.34315 16.6569 0 15 0C13.3431 0 12 1.34315 12 3C12 4.65685 13.3431 6 15 6Z"
                                        fill="#5C8692"
                                    />
                                    <path
                                        d="M3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6Z"
                                        fill="#5C8692"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_428">
                                        <rect width="30" height="6" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className="info">
                                <p>MAIL US :</p>
                                <span>info@beautyness.com</span>
                            </div>
                        </div>
                        <div className="part2">
                            <svg
                                width="30"
                                height="6"
                                viewBox="0 0 30 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_1_417)">
                                    <path
                                        d="M27 6C28.6569 6 30 4.65685 30 3C30 1.34315 28.6569 0 27 0C25.3431 0 24 1.34315 24 3C24 4.65685 25.3431 6 27 6Z"
                                        fill="#5C8692"
                                    />
                                    <path
                                        d="M15 6C16.6569 6 18 4.65685 18 3C18 1.34315 16.6569 0 15 0C13.3431 0 12 1.34315 12 3C12 4.65685 13.3431 6 15 6Z"
                                        fill="#5C8692"
                                    />
                                    <path
                                        d="M3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6Z"
                                        fill="#5C8692"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_417">
                                        <rect width="30" height="6" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className="info">
                                <p>CALL US :</p>
                                <span>(+1) 235 890 12</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-discount-right">
                        <div className="about-discount-text">
                            <span>- Get Flat -</span>
                            <p>50%</p>
                            <span>Discount</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="discount-right-part">
                <div className="discount-form">
                    <div className="icon-form">
                        <svg
                            width="41"
                            height="47"
                            viewBox="0 0 41 47"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M34.1666 40.4201V36.6601C34.1666 34.6656 33.4468 32.7529 32.1652 31.3427C30.8837 29.9324 29.1457 29.1401 27.3333 29.1401H13.6666C11.8543 29.1401 10.1163 29.9324 8.83474 31.3427C7.55326 32.7529 6.83331 34.6656 6.83331 36.6601V40.4201"
                                stroke="#7A9CA5"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M20.5 21.6201C24.2739 21.6201 27.3334 18.2533 27.3334 14.1001C27.3334 9.9469 24.2739 6.58008 20.5 6.58008C16.7261 6.58008 13.6667 9.9469 13.6667 14.1001C13.6667 18.2533 16.7261 21.6201 20.5 21.6201Z"
                                stroke="#7A9CA5"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <input className="form" />
                    </div>

                    <div className="icon-form">
                        <svg
                            width="41"
                            height="47"
                            viewBox="0 0 41 47"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.83335 8.45996H34.1667C36.0459 8.45996 37.5834 10.152 37.5834 12.22V34.78C37.5834 36.848 36.0459 38.54 34.1667 38.54H6.83335C4.95419 38.54 3.41669 36.848 3.41669 34.78V12.22C3.41669 10.152 4.95419 8.45996 6.83335 8.45996Z"
                                stroke="#7A9CA5"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M37.5834 12.2202L20.5 25.3802L3.41669 12.2202"
                                stroke="#7A9CA5"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <input className="form" />
                    </div>

                    <div className="icon-form">
                        <svg
                            width="41"
                            height="47"
                            viewBox="0 0 41 47"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M37.584 32.7495V38.3895C37.5861 38.9131 37.4885 39.4313 37.2979 39.911C37.1074 40.3908 36.8277 40.8215 36.4772 41.1753C36.1266 41.5293 35.7127 41.7989 35.2621 41.9666C34.8112 42.1343 34.3337 42.1965 33.8599 42.1495C28.6031 41.5209 23.5535 39.5441 19.1169 36.3779C14.9893 33.4914 11.4898 29.6402 8.86697 25.0979C5.97985 20.1934 4.18313 14.6094 3.62239 8.79829C3.57969 8.27841 3.63585 7.75446 3.78724 7.25975C3.93865 6.76505 4.18198 6.31047 4.50178 5.92495C4.82157 5.53942 5.21081 5.23138 5.64469 5.02049C6.07859 4.80957 6.54763 4.7004 7.02197 4.69989H12.147C12.976 4.69092 13.7798 5.014 14.4084 5.60894C15.037 6.20387 15.4476 7.03006 15.5636 7.93349C15.7799 9.73842 16.1811 11.5106 16.7595 13.2163C16.9893 13.8892 17.0391 14.6205 16.9028 15.3236C16.7666 16.0266 16.45 16.672 15.9907 17.1831L13.8211 19.5707C16.253 24.2773 19.7943 28.1744 24.0711 30.8507L26.2407 28.4631C26.7052 27.9576 27.2917 27.6093 27.9304 27.4594C28.5693 27.3094 29.2339 27.3641 29.8453 27.6171C31.3952 28.2535 33.0057 28.6951 34.6457 28.9331C35.4756 29.0619 36.2334 29.522 36.7753 30.2256C37.317 30.9293 37.6049 31.8276 37.584 32.7495Z"
                                stroke="#7A9CA5"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <input className="form" />
                    </div>

                    <div className="icon-form">
                        <svg
                            width="41"
                            height="47"
                            viewBox="0 0 41 47"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3.41669 6.58008H13.6667C15.479 6.58008 17.2171 7.37237 18.4985 8.78263C19.7801 10.1929 20.5 12.1056 20.5 14.1001V40.4201C20.5 38.9244 19.96 37.4897 18.9989 36.432C18.0378 35.3744 16.7343 34.7801 15.375 34.7801H3.41669V6.58008Z"
                                stroke="#7A9CA5"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M37.5833 6.58008H27.3333C25.521 6.58008 23.7829 7.37237 22.5015 8.78263C21.2199 10.1929 20.5 12.1056 20.5 14.1001V40.4201C20.5 38.9244 21.04 37.4897 22.0011 36.432C22.9622 35.3744 24.2659 34.7801 25.625 34.7801H37.5833V6.58008Z"
                                stroke="#7A9CA5"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <input className="form" />
                    </div>

                    <div className="icon-form">
                        <svg
                            width="40"
                            height="46"
                            viewBox="0 0 40 46"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18.3339 8.30566H6.66726C5.78321 8.30566 4.93537 8.69272 4.31024 9.38164C3.68512 10.0706 3.33392 11.005 3.33392 11.9793V37.6945C3.33392 38.6688 3.68512 39.6032 4.31024 40.2922C4.93537 40.9811 5.78321 41.3682 6.66726 41.3682H30.0005C30.8847 41.3682 31.7325 40.9811 32.3576 40.2922C32.9828 39.6032 33.3339 38.6688 33.3339 37.6945V24.837"
                                stroke="#7A9CA5"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M30.8339 5.55042C31.4969 4.81969 32.3962 4.40918 33.3339 4.40918C34.2717 4.40918 35.1708 4.81969 35.8339 5.55042C36.4969 6.28115 36.8694 7.27222 36.8694 8.30563C36.8694 9.33902 36.4969 10.3301 35.8339 11.0608L20.0006 28.5105L13.3339 30.3472L15.0006 23L30.8339 5.55042Z"
                                stroke="#7A9CA5"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <input className="wide-form" />
                    </div>

                    <button className="form-btn"></button>
                </div>
            </div>
        </div>
    );
}

export default Discount;
