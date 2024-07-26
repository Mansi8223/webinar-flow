import React from "react";
import styles from "../styles/modularCSS/ModalWrapper.module.css";

function ModalWrapper(props) {
  return (
    <div className={`${styles["modal-container"]}`}>
      <div
        className={`col-12 d-flex d-justify-center ${styles["modal-verify"]}`}
      >
        <div
          className={`col-11 col-xs-11 col-sm-7 col-md-6 col-lg-5 col-xl-5 col-xxl-4 bg-white p-7 rounded-8`}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default ModalWrapper;
