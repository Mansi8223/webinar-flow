import React, { useState } from "react";
import { toastError, toastSuccess } from "../Components/Toasters";

function WebinarModal(props) {
  const [title, setTitle] = useState(props?.title);
  const [description, setDescription] = useState(props?.description);
  const [topic, setTopic] = useState(props?.topic);
  const [date, setDate] = useState(props?.date);

  const titleHandler = (e) => setTitle(e.target.value);
  const descriptionHandler = (e) => setDescription(e.target.value);
  const topicHandler = (e) => setTopic(e.target.value);
  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim() || !topic.trim()) {
      toastError("All fields are required!");
      return;
    }

    const newObj = {
      title: title.trim(),
      description: description.trim(),
      topic: topic.trim(),
      date: date,
    };

    props.handler(newObj);
  };

  const resetHandler = () => {
    //reseting states with initial props
    setTitle(props?.title);
    setDescription(props?.description);
    setTopic(props?.topic);
    setDate(props?.date);
  };

  return (
    <form onSubmit={submitHandler} className="d-flex d-flex-column gap-6">
      <div className="d-flex d-align-end d-justify-space-between">
        <h2 className="f-600 l-36 text-black">{props.modalTitle}</h2>
        <div
          onClick={() => props.closeHandler()}
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
              fill="#252322"
            />
          </svg>
        </div>
      </div>
      <div className="d-flex d-flex-column gap-5">
        <div className="d-flex d-flex-column gap-1">
          <h6 className="f-500 l-20 text-black">Title</h6>
          <input
            required
            type="text"
            value={title}
            onChange={titleHandler}
            className={`pl-4 pr-4 pt-2 pb-2`}
          />
        </div>
        <div className="d-flex d-flex-column gap-1">
          <h6 className="f-500 l-20 text-black">Description</h6>
          <textarea
            required
            value={description}
            onChange={descriptionHandler}
            className={`pl-4 pr-4 pt-2 pb-2`}
          />
        </div>
        <div className="d-flex d-flex-column gap-1">
          <h6 className="f-500 l-20 text-black">Topic</h6>
          <input
            required
            type="text"
            value={topic}
            onChange={topicHandler}
            className={`pl-4 pr-4 pt-2 pb-2`}
            maxLength={25}
          />
        </div>
        <div className="d-flex d-flex-column gap-1">
          <h6 className="f-500 l-20 text-black">Date</h6>
          <input
            required
            type="datetime-local"
            value={date}
            onChange={dateHandler}
            className={`pl-4 pr-4 pt-2 pb-2`}
          />
        </div>
      </div>
      <div className="d-flex gap-4">
        <div
          onClick={() => {
            props.functionality == "add"
              ? props.closeHandler()
              : resetHandler();
          }}
          role="button"
          className="col-6 btn btn-secondary"
        >
          {props.functionality == "add" ? "Cancel" : "Reset"}
        </div>
        <button type="submit" className="col-6 btn btn-primary">
          {props.functionality == "add" ? "Create Webinar" : "Save Webinar"}
        </button>
      </div>
    </form>
  );
}

export default WebinarModal;
