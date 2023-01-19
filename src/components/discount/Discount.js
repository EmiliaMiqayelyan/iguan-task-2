import "./discount.css";
import "../global.css";

function Discount() {
    return (
        <div className="discount">
            <div className="discount-left-part">
                <p className="discount-title">FLAT DISCOUNT</p>
                <p className="discount-header">Claim upto 50% offer on the most popular services...</p>
                <div className="text-div">
                    <span>Our Retreat is not meant to be an occasional treat, but rather a part of your routine that restores balance to your daily life.</span>
                </div>
                <div className="about-discount">
                    <div className="about-discount-left">
                        <div className="part1">
                            <svg width="30" height="6" viewBox="0 0 30 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_428)">
                                    <path d="M27 6C28.6569 6 30 4.65685 30 3C30 1.34315 28.6569 0 27 0C25.3431 0 24 1.34315 24 3C24 4.65685 25.3431 6 27 6Z" fill="#5C8692" />
                                    <path d="M15 6C16.6569 6 18 4.65685 18 3C18 1.34315 16.6569 0 15 0C13.3431 0 12 1.34315 12 3C12 4.65685 13.3431 6 15 6Z" fill="#5C8692" />
                                    <path d="M3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6Z" fill="#5C8692" />
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
                            <svg width="30" height="6" viewBox="0 0 30 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_417)">
                                    <path d="M27 6C28.6569 6 30 4.65685 30 3C30 1.34315 28.6569 0 27 0C25.3431 0 24 1.34315 24 3C24 4.65685 25.3431 6 27 6Z" fill="#5C8692" />
                                    <path d="M15 6C16.6569 6 18 4.65685 18 3C18 1.34315 16.6569 0 15 0C13.3431 0 12 1.34315 12 3C12 4.65685 13.3431 6 15 6Z" fill="#5C8692" />
                                    <path d="M3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6Z" fill="#5C8692" />
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
                </div>
                <div>
                    <span>- Get Flat -</span>
                    <p>50%</p>
                    <p>Discount</p>
                </div>
            </div>

        </div>
    )
}

export default Discount;