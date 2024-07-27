import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/modularCSS/Dropdown.module.css";

//listner to check outside click
function useOutsideAlerter(ref, handler) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler]);
}

function Dropdown(props) {
  const [selected, setSelected] = useState(props.defaultValue);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const openHandler = () => setOpen((prev) => !prev); //open toggle state handler
  useOutsideAlerter(wrapperRef, openHandler);
  return (
    <div className="d-flex d-align-center gap-1">
      {props?.title && (
        <span className="h6 f-400 l-20 text-black">{props?.title}: </span>
      )}
      <div className="col-12 p-relative">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className={`${styles.dropdownBtn} d-flex d-align-center d-justify-space-between gap-2 bg-white border rounded-12 pl-4 pr-4 pt-3 pb-3`}
        >
          {selected ? (
            <h6 className="f-500 l-20 text-black">{selected}</h6>
          ) : (
            <h6 className="f-400 l-20 text-gray">All</h6>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.99959 10.9761L14.1244 6.85132L15.3029 8.02983L9.99959 13.3332L4.69629 8.02983L5.87481 6.85132L9.99959 10.9761Z"
              fill="#716C6A"
            />
          </svg>
        </div>
        {/* popUp */}
        {open && (
          <div
            ref={wrapperRef}
            className={`${styles.dropdownList} p-absolute d-flex d-flex-column rounded-12 bg-white box-shadow o-hidden`}
          >
            {props.arr.map((item, index) => (
              <h6
                onClick={() => {
                  setOpen(false);
                  setSelected(item);
                  props.handler(item);
                }}
                key={item}
                className={`${styles.dropdownItems} f-500 l-20 text-black pl-4 pr-4 pt-2 pb-2 cursor-pointer`}
              >
                {item}
              </h6>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
