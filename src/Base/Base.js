import React from "react";
import style from "../styles/modularCSS/Base.module.css";
import Sidebar from "../Layout/Sidebar";
//wrapper component
function Base(props) {
  return (
    <div className="d-flex bg-neutral">
      <Sidebar />
      <main className={`${style["main-class"]}`}>{props.children}</main>
    </div>
  );
}

export default Base;
