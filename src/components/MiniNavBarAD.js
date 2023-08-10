import { useState, useCallback } from "react";
// import PortalPopup from "../components/PortalPopup";
// import PopupRegular from "../popups/PopupRegular";

import { Link, useNavigate } from "react-router-dom";
import "../components/MiniNavBarAD.css";

const MiniNavBarAD = (props) => {
  const [isLogOutPopupOpen, setLogOutPopupOpen] = useState(false);

  const openLogOutPopup = useCallback(() => {
    setLogOutPopupOpen(true);
  }, []);

  const closeLogOutPopup = useCallback(() => {
    setLogOutPopupOpen(false);
  }, []);

  let navigate = useNavigate();
  const onLogout = useCallback(() => {
    sessionStorage.clear();
    navigate("/");
  }, [navigate]);

  return (
    <nav>
      {/* <nav className="admininavbar"> */}
      <div className="admininavbar-child" />
      <button className="nav-expand" onClick={props.toggleNavbar}>
        <div className="nav-expand-child" />
        <img
          className="vaadinlines-list-icon"
          alt=""
          src="/vaadinlineslist.svg"
        />
      </button>


      <Link className="icon-home-wrapper" to={'/admin/home'}>
        <img className="icon-home" alt="" src="/iconhome.svg" />
      </Link>

      <Link className="logout-wrapper" onClick={openLogOutPopup}>
        <img className="logout-icon" alt="" src="/iconlogout1.svg" />
      </Link>




      <Link className="bookopentext-wrapper" to={'/user/publication'}>
        <img className="bookopentext-icon" alt="" src="/bookopentext.svg" />
      </Link>



      <Link className="icon-seminar-wrapper" >
        <img className="icon-seminar" alt="" src="/iconseminar1.svg" />
      </Link>


      <Link className="noun-learning-analytics-27473-wrapper">
        <img
          className="icon-seminar"
          alt=""
          src="/nounlearninganalytics274731.svg"
        />
      </Link>


      <Link className="heroiconsdocument-check-solid-wrapper">
        <img
          className="icon-seminar"
          alt=""
          src="/heroiconsdocumentchecksolid1.svg"
        />
      </Link>


      <Link className="dashiconsawards-wrapper">
        <img className="icon-seminar" alt="" src="/dashiconsawards.svg" />
      </Link>
      <Link
        className="bookopentext-container"

      >
        <img className="bookopentext-icon" alt="" src="/bookopentext.svg" />
      </Link>
      <Link className="icon-seminar-container">
        <img className="icon-seminar" alt="" src="/iconseminar1.svg" />
      </Link>
      <Link className="noun-learning-analytics-27473-container">
        <img
          className="icon-seminar"
          alt=""
          src="/nounlearninganalytics274731.svg"
        />
      </Link>
      <Link className="heroiconsdocument-check-solid-container">
        <img
          className="icon-seminar"
          alt=""
          src="/heroiconsdocumentchecksolid1.svg"
        />
      </Link>
      <Link className="dashiconsawards-container">
        <img className="icon-seminar" alt="" src="/dashiconsawards.svg" />
      </Link>
      <Link
        className="icon-park-outlinefile-staff-o-wrapper"
      // onClick={onFrameLink12Click}
      >
        <img
          className="icon-seminar"
          alt=""
          src="/iconparkoutlinefilestaffone1.svg"
        />
      </Link>
      <Link className="material-symbolsgroups-rounde-wrapper">
        <img
          className="icon-seminar"
          alt=""
          src="/materialsymbolsgroupsrounded.svg"
        />
      </Link>
      <Link className="icon-notification-wrapper">
        <img
          className="icon-notification"
          alt=""
          src="/iconnotification.svg"
        />
      </Link>
      <Link className="icon-support-wrapper">
        <img className="icon-notification" alt="" src="/iconsupport.svg" />
      </Link>
      <Link className="icon-settings-wrapper">
        <img className="icon-notification" alt="" src="/iconsettings1.svg" />
      </Link>
      <img className="admininavbar-item" alt="" src="/line-31.svg" />
      <img className="admininavbar-inner" alt="" src="/line-31.svg" />
      {/*isLogOutPopupOpen &&
        (<PortalPopup placement="Centered" overlayColor="rgba(0,0,0,0.5)" onOutsideClick={closeLogOutPopup}>
          <PopupRegular onClose={closeLogOutPopup} heading={"Are you sure you want to logout?"}
            subText={"Come Back Soon !"} icon={"/icons/Logout.svg"} onConfirm={onLogout}
          />
  </PortalPopup>)*/}
    </nav>
  );
};

export default MiniNavBarAD;
