import React from "react";
import Menubar from "./Menubar";
import styles from "../styles/modularCSS/Sidebar.module.css";

function Sidebar() {
  return (
    <div
      className={`${styles.sidebar} d-flex d-flex-column d-align-end p-4 bg-secondary`}
    >
      <div className="col-12 d-flex d-flex-column d-align-center gap-6">
        <div className="col-12 d-flex d-align-start">
          {/* logo */}
          <div className="col-12 d-flex d-align-center d-justify-center">
            <h1 className="f-700 text-white">Logo</h1>
          </div>
        </div>
        <Menubar />
      </div>
    </div>
  );
}

export default Sidebar;
