import React from "react";
import styles from "../styles/modularCSS/ModalWrapper.module.css";

function ModalWrapper(props) {
  return (
    <div className={`${styles["modal-container"]}`}>
      <div
        className={`col-12 d-flex d-justify-center ${styles["modal-verify"]}`}
      >
        <div className={`col-6 bg-white rounded-8`}>{props.children}</div>
      </div>
    </div>
  );
}

export default ModalWrapper;
