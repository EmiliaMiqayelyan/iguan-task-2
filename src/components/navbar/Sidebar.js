import "./navbar.css";
import "../global.css";
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineMenuFold } from "react-icons/ai";
import { ImHome } from "react-icons/im";

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <AiOutlineMenuFold className="menu-icon" onClick={handleShow} />

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h5>Beautyness!!!</h5>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.05 5.5C16.0267 5.69057 16.9244 6.16826 17.6281 6.87194C18.3317 7.57561 18.8094 8.47326 19 9.45L15.05 5.5ZM15.05 1.5C17.0793 1.72544 18.9716 2.63417 20.4162 4.07701C21.8609 5.51984 22.772 7.41101 23 9.44L15.05 1.5ZM22 17.42V20.42C22.0011 20.6985 21.9441 20.9742 21.8325 21.2293C21.7209 21.4845 21.5573 21.7136 21.3521 21.9019C21.1469 22.0901 20.9046 22.2335 20.6407 22.3227C20.3769 22.4119 20.0974 22.4451 19.82 22.42C16.7428 22.0856 13.787 21.0341 11.19 19.35C8.77382 17.8147 6.72533 15.7662 5.18999 13.35C3.49997 10.7412 2.44824 7.77099 2.11999 4.68C2.095 4.40347 2.12787 4.12476 2.21649 3.86162C2.30512 3.59849 2.44757 3.35669 2.63476 3.15162C2.82196 2.94655 3.0498 2.78271 3.30379 2.67052C3.55777 2.55833 3.83233 2.50026 4.10999 2.5H7.11C7.5953 2.49522 8.06579 2.66708 8.43376 2.98353C8.80173 3.29999 9.04207 3.73945 9.10999 4.22C9.23662 5.18007 9.47145 6.12273 9.81 7.03C9.94454 7.38792 9.97366 7.77691 9.8939 8.15088C9.81415 8.52485 9.62886 8.86811 9.35999 9.14L8.09 10.41C9.51355 12.9135 11.5864 14.9864 14.09 16.41L15.36 15.14C15.6319 14.8711 15.9751 14.6858 16.3491 14.6061C16.7231 14.5263 17.1121 14.5555 17.47 14.69C18.3773 15.0286 19.3199 15.2634 20.28 15.39C20.7658 15.4585 21.2094 15.7032 21.5265 16.0775C21.8437 16.4518 22.0122 16.9296 22 17.42Z"
                stroke="#7A9CA5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span style={{ marginLeft: "20px", fontSize: "12px" }}>
              Call Us - (+22) 123 456 7890
            </span>
          </div>
          <div>
            <span style={{marginTop: "20px"}}>Home</span>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
