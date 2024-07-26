import React from "react";

//list of sidebar tabs
function Menubar() {
  return (
    <ul className="col-12 d-flex d-flex-column m-0 p-0">
      <li className="d-flex d-align-center gap-3 pl-3 pr-3 pt-4 pb-4 bg-ternary rounded-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M2.5 10.0003H5.83333V17.5003H2.5V10.0003ZM14.1667 6.66699H17.5V17.5003H14.1667V6.66699ZM8.33333 1.66699H11.6667V17.5003H8.33333V1.66699Z"
            fill="var(--white)"
          />
        </svg>
        <h6 className="f-500 l-20 text-white">Webinars</h6>
      </li>
    </ul>
  );
}

export default Menubar;
