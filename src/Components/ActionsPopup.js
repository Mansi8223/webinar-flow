import React, { useRef, useState, useEffect } from "react";
import ModalWrapper from "../Modals/ModalWrapper";
import Modal from "../Modals/Modal";

//handler to check outside click for popup closing
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
  }, [ref]);
}

function ActionsPopup({ deleteHandler, editHandler }) {
  const [show, setShow] = useState(false);
  const [isDelete, setDelete] = useState(false);
  const wrapperRef = useRef();

  const showHandler = () => setShow((prev) => !prev);

  useOutsideAlerter(wrapperRef, showHandler);

  const deleteConfirmationHandler = () => {
    setDelete(false);
    deleteHandler();
  };
  return (
    <>
      <div className="d-flex d-justify-end">
        <svg
          onClick={(e) => {
            e.preventDefault();
            showHandler();
          }}
          className={`cursor-pointer`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
            fill="#716C6A"
          />
        </svg>
        {/* action popup */}
        {show && (
          <div
            ref={wrapperRef}
            style={{ width: "160px", zIndex: "2" }}
            className="p-absolute bg-white rounded-8 box-shadow mt-5"
          >
            <div
              onClick={(e) => {
                e.preventDefault();
                editHandler();
              }}
              className="d-flex d-align-center d-justify-space-between pl-4 pr-4 pt-2 pb-2 border-bottom cursor-pointer"
            >
              <h6 className="f-500 l-20 text-black">Edit</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5.34517 13.2417L13.7969 4.78987L12.6184 3.61137L4.16667 12.0632V13.2417H5.34517ZM6.03553 14.9083H2.5V11.3728L12.0292 1.8436C12.3547 1.51816 12.8822 1.51816 13.2077 1.8436L15.5647 4.20062C15.8902 4.52606 15.8902 5.05369 15.5647 5.37913L6.03553 14.9083ZM2.5 16.575H17.5V18.2417H2.5V16.575Z"
                  fill="#252322"
                />
              </svg>
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                setDelete(true);
              }}
              className="d-flex d-align-center d-justify-space-between pl-4 pr-4 pt-2 pb-2 cursor-pointer"
            >
              <h6 className="f-500 l-20 text-error">Delete</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M14.1667 5.00033H18.3334V6.66699H16.6667V17.5003C16.6667 17.9606 16.2937 18.3337 15.8334 18.3337H4.16675C3.70651 18.3337 3.33341 17.9606 3.33341 17.5003V6.66699H1.66675V5.00033H5.83342V2.50033C5.83342 2.04009 6.20651 1.66699 6.66675 1.66699H13.3334C13.7937 1.66699 14.1667 2.04009 14.1667 2.50033V5.00033ZM15.0001 6.66699H5.00008V16.667H15.0001V6.66699ZM7.50008 9.16699H9.16675V14.167H7.50008V9.16699ZM10.8334 9.16699H12.5001V14.167H10.8334V9.16699ZM7.50008 3.33366V5.00033H12.5001V3.33366H7.50008Z"
                    fill="#E84D3C"
                  />
                </svg>
              </svg>
            </div>
          </div>
        )}
      </div>
      {isDelete && (
        <ModalWrapper>
          <Modal
            handler={deleteConfirmationHandler}
            closeHandler={() => setDelete(false)}
            title="Do you want to delete webinar?"
            body="The webinar will be removed from the database."
            btn="btn-red"
            btnText="Delete webinar"
          ></Modal>
        </ModalWrapper>
      )}
    </>
  );
}

export default ActionsPopup;
