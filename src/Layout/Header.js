import React, { useState } from "react";
import styles from "../styles/modularCSS/Header.module.css";

//modal component imports
import ModalWrapper from "../Modals/ModalWrapper";
import Modal from "../Modals/Modal";

function Header(props) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [logout, setLogout] = useState(false);

  //handler to open close profile popup
  const profileOpenHandler = () => setProfileOpen((prev) => !prev);

  //handler to open close logout modal
  const logoutHandler = () => setLogout((prev) => !prev);

  const signOutHandler = () => {};

  return (
    <>
      <header
        className={`${styles["header"]} p-sticky d-flex d-align-center d-justify-space-between pl-10 pr-10 pt-3 pb-3 bg-white border-bottom`}
      >
        <h2 className="f-600 l-36 text-black">{props.title}</h2>
        <div className="d-flex d-align-center gap-7">
          <div className="d-flex d-align-center gap-2">
            <img
              className="rounded"
              width={40}
              height={40}
              src="/asset/user-profile.png"
              alt="user-profile"
            />
            <div className="d-flex d-flex-column">
              <h6 className="f-600 l-20 text-black">Super Admin</h6>
              <h6 className="f-600 l-20 text-blue">Mansi</h6>
            </div>
            {/* profile popup */}
            <div className="p-relative d-flex d-justify-end">
              <div
                onClick={profileOpenHandler}
                className="d-flex d-align-center d-justify-center p-1 rounded bg-neutral cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"
                    fill="#908B89"
                  />
                </svg>
              </div>
              {profileOpen && (
                <div
                  className={`${styles["profile-dropdown"]} p-absolute d-flex d-flex-column bg-white rounded-8 box-shadow pt-1 pb-1`}
                >
                  <div
                    onClick={logoutHandler}
                    className="d-flex d-align-center d-justify-space-between gap-3 pl-4 pr-4 pt-2 pb-2 cursor-pointer"
                  >
                    <h6 className="f-500 l-20 text-error">Log out</h6>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1100_1506)">
                        <path
                          d="M10.0001 18.3337C5.39771 18.3337 1.66675 14.6027 1.66675 10.0003C1.66675 5.39795 5.39771 1.66699 10.0001 1.66699C12.7262 1.66699 15.1465 2.97598 16.6669 4.99968L14.4092 4.99975C13.234 3.96282 11.6905 3.33366 10.0001 3.33366C6.31818 3.33366 3.33341 6.31843 3.33341 10.0003C3.33341 13.6822 6.31818 16.667 10.0001 16.667C11.6909 16.667 13.2347 16.0375 14.41 15.0002H16.6675C15.1472 17.0243 12.7265 18.3337 10.0001 18.3337ZM15.8334 13.3337V10.8337H9.16675V9.16699H15.8334V6.66699L20.0001 10.0003L15.8334 13.3337Z"
                          fill="#E84D3C"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1100_1506">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* logout modal */}
      {logout && (
        <ModalWrapper>
          <Modal
            handler={signOutHandler}
            closeHandler={logoutHandler}
            title="Do you want to log out?"
            body="You will have to login again with your id and password"
            btn="btn-red"
            btnText="Log out"
          ></Modal>
        </ModalWrapper>
      )}
    </>
  );
}

export default Header;
