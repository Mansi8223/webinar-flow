import React, { useState } from "react";
import ActionsPopup from "./ActionsPopup";
import ModalWrapper from "../Modals/ModalWrapper";
import WebinarModal from "../Modals/WebinarModal";

function WebinarRow({ item, index, deleteHandler, editHandler }) {
  const [openEditModal, setOpenEditModal] = useState(false);

  return (
    <>
      <tr key={index}>
        <td className="pl-5">{item?.title}</td>
        <td>{item?.description}</td>
        <td>{item?.topic}</td>
        <td>{new Date(item?.date)?.toLocaleString()?.slice(0, 17)}</td>
        <td>
          <ActionsPopup
            deleteHandler={() => deleteHandler(index, item)}
            editHandler={() => setOpenEditModal(true)}
          />
        </td>
      </tr>
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
            title={item?.title}
            description={item?.description}
            topic={item?.topic}
            date={item?.date}
          />
        </ModalWrapper>
      )}
    </>
  );
}

export default WebinarRow;
