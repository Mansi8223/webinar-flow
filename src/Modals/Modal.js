import React from "react";

function Modal(props) {
  return (
    <div className="d-flex d-flex-column d-align-end gap-6">
      <div className="col-12 d-flex d-flex-column d-align-start gap-3">
        <div className="col-12 d-flex d-align-center d-justify-space-between gap-2">
          <h4 className="f-600 l-24 text-black text-left">{props.title}</h4>
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              props.closeHandler();
            }}
            className={`d-flex d-align-center d-justify-center p-2 bg-neutral rounded-8 cursor-pointer`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
                fill="var(--black)"
              />
            </svg>
          </div>
        </div>
        <h5 className="text-left f-400 l-24 text-gray">{props.body}</h5>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          props.handler();
        }}
        className={`btn ${props.btn} pl-5 pr-5 pt-3 pb-3`}
      >
        {props.btnText}
      </button>
    </div>
  );
}

export default Modal;
