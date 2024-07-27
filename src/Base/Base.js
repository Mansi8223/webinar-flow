import React from "react";
import style from "../styles/modularCSS/Base.module.css";
//wrapper component
function Base(props) {
  return (
    <div className="d-flex">
      <main className={`${style["main-class"]}`}>{props.children}</main>
    </div>
  );
}

export default Base;
