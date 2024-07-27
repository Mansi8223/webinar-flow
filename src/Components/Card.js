import React from "react";
import { useState } from "react";
import ModalWrapper from "../Modals/ModalWrapper";
import WebinarModal from "../Modals/WebinarModal";
import Modal from "../Modals/Modal";

function Card({ item, index, editHandler, deleteHandler }) {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [isDelete, setDelete] = useState(false);

  const deleteConfirmationHandler = () => {
    setDelete(false);
    //pass index and item to be deleted
    deleteHandler(index, item);
  };
  return (
    <>
      <div className="d-flex d-flex-column gap-4 p-5 rounded-20 bg-white border">
        <div
          style={{ backgroundColor: `${item?.color}` }}
          className="d-flex d-align-center d-justify-space-between p-5 rounded-16"
        >
          <div className="d-flex d-flex-column gap-1">
            <span className="h4 f-600 l-28 text-white">
              {item?.instructorName}
            </span>
            <span className="h6 f-600 l-24 text-white">
              {item?.instructorRole}
              <br /> {item?.instructorCompany}
            </span>
          </div>
          {item?.instructorImage ? (
            <img
              width={76}
              height={76}
              src={item?.instructorImage}
              alt={item?.instructorName}
              className={`rounded-12 object-cover`}
            />
          ) : (
            <img
              width={76}
              height={76}
              src="/asset/avatar.svg"
              alt="instructor-avatar"
            />
          )}
        </div>
        <div className="d-flex d-flex-column gap-3">
          <div className="d-flex d-flex-column gap-1">
            <span style={{ color: `${item?.color}` }} className="h6 f-600 l-24">
              {item?.topic}
            </span>
            <span className="h4 f-600 l-28 text-black">{item?.title}</span>
            <span className="f6 f-400 l-24 text-black">
              {new Date(item?.date).toUTCString().slice(0, 12)},{" "}
              {item?.startTime} - {item?.endTime}
            </span>
          </div>
          <div className="d-flex gap-3">
            <button
              onClick={() => setDelete(true)}
              className="btn btn-error rounded"
            >
              Delete
            </button>
            <button
              onClick={() => setOpenEditModal(true)}
              className="btn btn-secondary"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      {/* edit modal */}
      {openEditModal && (
        <ModalWrapper>
          <WebinarModal
            modalTitle="Edit Webinar"
            functionality="edit"
            closeHandler={() => setOpenEditModal(false)}
            handler={(newObj) => {
              editHandler(index, newObj);
              setOpenEditModal(false);
            }}
            data={item}
          />
        </ModalWrapper>
      )}
      {/* delete confirmation modal */}
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

export default Card;
