import React, { useState, useRef } from "react";
import { toastError } from "../Components/Toasters";
import styles from "../styles/modularCSS/WebinarModal.module.css";

function WebinarModal(props) {
  const fileInputRef = useRef();
  const [title, setTitle] = useState(props?.data?.title);
  const [topic, setTopic] = useState(props?.data?.topic);
  const [date, setDate] = useState(props?.data?.date);
  const [startTime, setStartTime] = useState(props?.data?.startTime);
  const [endTime, setEndTime] = useState(props?.data?.endTime);
  const [instructorName, setInstructorName] = useState(
    props?.data?.instructorName
  );
  const [instructorRole, setInstructorRole] = useState(
    props?.data?.instructorRole
  );
  const [instructorCompany, setInstructorCompany] = useState(
    props?.data?.instructorCompany
  );
  const [instructorImage, setInstructorImage] = useState(
    props?.data?.instructorImage
  );

  const titleHandler = (e) => setTitle(e.target.value);
  const instructorNameHandler = (e) => setInstructorName(e.target.value);
  const instructorRoleHandler = (e) => setInstructorRole(e.target.value);
  const instructorCompanyHandler = (e) => setInstructorCompany(e.target.value);
  const topicHandler = (e) => setTopic(e.target.value);
  const startTimeHandler = (e) => {
    setStartTime(e.target.value);
  };
  const endTimeHandler = (e) => setEndTime(e.target.value);
  const dateHandler = (e) => {
    setDate(e.target.value);
  };
  const instructorImageHandler = (e) => {
    setInstructorImage(URL.createObjectURL(e.target.files[0]));
  };

  //generate random color for card
  function getRandomColor() {
    let color;
    do {
      color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    } while (color === "#ffffff" || color.length !== 7);
    return color;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    //checking for extra spaces
    if (
      !instructorName.trim() ||
      !instructorRole.trim() ||
      !instructorCompany.trim() ||
      !topic.trim() ||
      !title.trim()
    ) {
      toastError("All fields are required!");
      return;
    }

    const newObj = {
      instructorName: instructorName.trim(),
      instructorRole: instructorRole.trim(),
      instructorCompany: instructorCompany.trim(),
      instructorImage: instructorImage,
      title: title.trim(),
      topic: topic.trim(),
      date: date,
      startTime: startTime,
      endTime: endTime,
      color:
        props?.functionality == "add" ? getRandomColor() : props?.data?.color,
    };

    props.handler(newObj);
  };

  const resetHandler = () => {
    //reseting states with initial props
    setTitle(props?.data?.title);
    setTopic(props?.data?.topic);
    setDate(props?.data?.date);
    setStartTime(props?.data?.startTime);
    setEndTime(props?.data?.endTime);
    setInstructorName(props?.data?.instructorName);
    setInstructorRole(props?.data?.instructorRole);
    setInstructorCompany(props?.data?.instructorCompany);
    setInstructorImage(props?.data?.instructorImage);
  };

  return (
    <form onSubmit={submitHandler} className="d-flex d-flex-column">
      <div
        className={`${styles.header} d-flex d-align-center d-justify-space-between p-5 border-bottom bg-white`}
      >
        <span className="h4 f-600 l-28 text-black">{props.modalTitle}</span>
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
      <section className="d-flex d-flex-column gap-6 p-7 border-bottom">
        {/* instructor details */}
        <div className="col-12 d-flex gap-6">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
              stroke="#444952"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
              stroke="#444952"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
              stroke="#444952"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
              stroke="#444952"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="col-12 d-flex d-flex-column gap-5">
            <span className="h5 f-600 l-28 text-black">Instructor Details</span>
            <div className="form-inputs d-flex d-justify-space-between gap-6">
              <div className="col-12 col-lg-6 d-flex d-flex-column gap-6">
                <div className="d-flex d-flex-column gap-1">
                  <h6 className="f-500 l-20 text-black">
                    Instructor Name <sup className="text-error">*</sup>
                  </h6>
                  <input
                    required
                    type="text"
                    value={instructorName}
                    onChange={instructorNameHandler}
                    className={`pl-4 pr-4 pt-2 pb-2`}
                    placeholder="Type the instructor name "
                  />
                </div>
                <div className="d-flex d-flex-column gap-1">
                  <h6 className="f-500 l-20 text-black">
                    Instructor Role <sup className="text-error">*</sup>
                  </h6>
                  <input
                    required
                    type="text"
                    value={instructorRole}
                    onChange={instructorRoleHandler}
                    className={`pl-4 pr-4 pt-2 pb-2`}
                    placeholder="Type the instructor role "
                  />
                </div>
                <div className="d-flex d-flex-column gap-1">
                  <h6 className="f-500 l-20 text-black">
                    Instructor Company <sup className="text-error">*</sup>
                  </h6>
                  <input
                    required
                    type="text"
                    value={instructorCompany}
                    onChange={instructorCompanyHandler}
                    className={`pl-4 pr-4 pt-2 pb-2`}
                    placeholder="Type the instructor company  "
                  />
                </div>
              </div>
              <div className="col-12 col-lg-6 d-flex d-flex-column gap-4">
                <div className="d-flex d-flex-column gap-2">
                  <h6 className="f-500 l-20 text-black">Instructor Image</h6>
                  <div
                    onClick={(event) => {
                      event.preventDefault();
                      fileInputRef.current.click();
                    }}
                  >
                    {instructorImage ? (
                      <img
                        className="object-cover rounded-8"
                        width={135}
                        height={135}
                        src={instructorImage}
                        alt="instructor-image"
                      />
                    ) : (
                      <div
                        className={`${styles.imageContainer} d-flex d-align-center d-justify-center border-dashed rounded-8`}
                      >
                        <svg
                          width="31"
                          height="31"
                          viewBox="0 0 31 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3048 30.4726V0.385933H17.3687V30.4726H13.3048ZM0.281531 17.4493V13.4092H30.392V17.4493H0.281531Z"
                            fill="#636973"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                <input
                  type="file"
                  name="images"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={instructorImageHandler}
                />
                <div className="d-flex d-flex-column gap-1">
                  <h6 className="f-500 l-20 text-black">
                    Topics <sup className="text-error">*</sup>
                  </h6>
                  <input
                    required
                    type="text"
                    value={topic}
                    onChange={topicHandler}
                    className={`pl-4 pr-4 pt-2 pb-2`}
                    placeholder="Type the topics"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* webinar details */}
        <div className="col-12 d-flex gap-6">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_8_553)">
              <path
                d="M23.5 6.99997L16.5 12L23.5 17V6.99997Z"
                stroke="#444952"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.5 5.00003H3.5C2.39543 5.00003 1.5 5.89546 1.5 7.00003V17C1.5 18.1046 2.39543 19 3.5 19H14.5C15.6046 19 16.5 18.1046 16.5 17V7.00003C16.5 5.89546 15.6046 5.00003 14.5 5.00003Z"
                stroke="#444952"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_8_553">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="col-12 d-flex d-flex-column gap-5">
            <span className="h5 f-600 l-28 text-black">Webinar Details</span>
            <div className="col-12 d-flex d-flex-column gap-6">
              <div className="d-flex d-flex-column gap-1">
                <h6 className="f-500 l-20 text-black">
                  Webinar title <sup className="text-error">*</sup>
                </h6>
                <input
                  required
                  type="text"
                  value={title}
                  onChange={titleHandler}
                  className={`pl-4 pr-4 pt-2 pb-2`}
                  placeholder="Type the webinar title "
                />
              </div>
              <div className="d-flex d-flex-wrap gap-3">
                <div className="d-flex d-flex-column gap-1">
                  <h6 className="f-500 l-20 text-black">
                    Start Date<sup className="text-error">*</sup>
                  </h6>
                  <input
                    required
                    type="date"
                    value={date}
                    onChange={dateHandler}
                    className={`pl-4 pr-4 pt-2 pb-2`}
                  />
                </div>
                <div className="d-flex d-flex-column gap-1">
                  <h6 className="f-500 l-20 text-black">
                    Start time<sup className="text-error">*</sup>
                  </h6>
                  <input
                    required
                    type="time"
                    value={startTime}
                    onChange={startTimeHandler}
                    className={`pl-4 pr-4 pt-2 pb-2`}
                  />
                </div>
                <div className="d-flex d-flex-column gap-1">
                  <h6 className="f-500 l-20 text-black">
                    End time<sup className="text-error">*</sup>
                  </h6>
                  <input
                    required
                    type="time"
                    value={endTime}
                    onChange={endTimeHandler}
                    className={`pl-4 pr-4 pt-2 pb-2`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="d-flex gap-4 p-5">
        {/* add and edit button */}
        <button type="submit" className="btn btn-primary rounded-12">
          {props.functionality == "add" ? "Create webinar" : "Save Webinar"}
        </button>
        {/* cancel and reset button */}
        <div
          onClick={() => {
            props.functionality == "add"
              ? props.closeHandler()
              : resetHandler();
          }}
          role="button"
          className="btn btn-secondary rounded-12"
        >
          {props.functionality == "add" ? "Cancel" : "Reset"}
        </div>
      </div>
    </form>
  );
}

export default WebinarModal;
