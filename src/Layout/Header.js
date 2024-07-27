import React, { useState } from "react";
import styles from "../styles/modularCSS/Header.module.css";
import { toastSuccess } from "../Components/Toasters";
import ModalWrapper from "../Modals/ModalWrapper";
import WebinarModal from "../Modals/WebinarModal";

function Header({ title, addHandler }) {
  const [openAddModal, setOpenAddModal] = useState(false);

  //adding new entry
  const addNewEntryHandler = (newObj) => {
    addHandler(newObj);
    setOpenAddModal(false);
  };

  return (
    <>
      <header
        className={`${styles["header"]} p-sticky d-flex d-align-center d-justify-space-between pl-10 pr-10 pt-3 pb-3 bg-white border-bottom`}
      >
        <h2 className="f-600 l-36 text-black">{title}</h2>

        {/* add button */}
        <button
          onClick={() => setOpenAddModal(true)}
          className="btn btn-primary pl-5 pr-5 pt-2 pb-2 gap-2 rounded-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.16663 9.16699V4.16699H10.8333V9.16699H15.8333V10.8337H10.8333V15.8337H9.16663V10.8337H4.16663V9.16699H9.16663Z"
              fill="white"
            />
          </svg>
          Add webinar
        </button>
      </header>
      {/* add modal */}
      {openAddModal && (
        <ModalWrapper>
          <WebinarModal
            modalTitle="Create Webinar"
            functionality="add"
            closeHandler={() => setOpenAddModal(false)}
            handler={addNewEntryHandler}
          />
        </ModalWrapper>
      )}
    </>
  );
}

export default Header;
