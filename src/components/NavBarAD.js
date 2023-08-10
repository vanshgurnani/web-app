import { useState, useCallback, useEffect, useContext } from "react";
// import PortalPopup from "../components/PortalPopup";
// import PopupRegular from "../popups/PopupRegular";
import "../components/NavBarAD.css";
import { Link, useNavigate } from "react-router-dom";
// import LoginContext from "../context/LoginContext";

const NavBarAD = (props) => {

  const [isLogOutPopupOpen, setLogOutPopupOpen] = useState(false);

  const openLogOutPopup = useCallback(() => {
    setLogOutPopupOpen(true);
  }, []);

  const closeLogOutPopup = useCallback(() => {
    setLogOutPopupOpen(false);
  }, []);



  let navigate = useNavigate();


  // const { clearUser } = useContext(LoginContext);

  // const onLogout = useCallback(() => {

  //   closeLogOutPopup();
  //   sessionStorage.clear();
  //   clearUser();


  //   navigate("/");
  // }, [navigate]);


  const [name, setName] = useState("");
  const [email, setEmail] = useState(sessionStorage.getItem("userId"));


  setTimeout(() => {
    setName(sessionStorage.getItem("userName"))
    setEmail(sessionStorage.getItem("userId"))
  }, 10);





  return (
    <>
      <div className="navbar7">
        <div>

          <Link className="home-wrapper1" to={'/admin/home'}>
            <div className="publication">
              <div className="project-inner">
                <div className="publications-wrapper">
                  <div className="home32">Home</div>
                </div>
              </div>
              <img className="icon-home6" alt="" src="/iconhome.svg" />
            </div>
          </Link>


          <Link className="publication-wrapper" to={'/user/publication'}>
            <div className="nav-text nav_pub">Publications</div>
            <img className="bookopentext-icon2" alt="" src="/bookopentext.svg" />
          </Link>



          <Link className="lectures-wrapper">
            <div className="publication">
              <img className="icon-home6" alt="" src="/iconseminar1.svg" />
              <div className="project-inner">
                <div className="publications-wrapper">
                  <div className="nav-text">Guest Lectures</div>
                </div>
              </div>
            </div>
          </Link>



          <Link className="awards-wrapper">
            <div className="awards">
              <div className="project-inner">
                <div className="publications-wrapper">
                  <div className="nav-text">Awards</div>
                </div>
              </div>
              <img className="icon-home6" alt="" src="/dashiconsawards.svg" />
            </div>
          </Link>


          <Link className="project-wrapper">
            <div className="publication">
              <div className="project-inner">
                <div className="publications-wrapper">
                  <div className="nav-text">Projects</div>
                </div>
              </div>
              <img
                className="icon-home6"
                alt=""
                src="/nounlearninganalytics27473.svg"
              />
            </div>
          </Link>


          <Link className="patent-wrapper">
            <div className="patent">
              <div className="project-inner">
                <div className="publications-wrapper">
                  <div className="nav-text">Patent</div>
                </div>
              </div>
              <img
                className="icon-home6"
                alt=""
                src="/heroiconsdocumentchecksolid.svg"
              />
            </div>
          </Link>




          <Link className="publication-container" to={'/admin/PublicationAD'}>
            <div className="publication">
              <div className="researchpaper2">
                <div className="researchpaper-inner1">
                  <div className="publications-wrapper">
                    <div className="nav-text">Publications</div>
                  </div>
                </div>
              </div>
              <img
                className="bookopentext-icon2"
                alt=""
                src="/bookopentext.svg"
              />
            </div>
          </Link>
          <Link className="lectures-container">
            <div className="publication">
              <img className="icon-home6" alt="" src="/iconseminar1.svg" />
              <div className="project-inner">
                <div className="publications-wrapper">
                  <div className="nav-text">Guest Lectures</div>
                </div>
              </div>
            </div>
          </Link>

          <Link className="project-container">
            <div className="publication">
              <div className="project-inner">
                <div className="publications-wrapper">
                  <div className="nav-text">Projects</div>
                </div>
              </div>
              <img
                className="icon-home6"
                alt=""
                src="/nounlearninganalytics27473.svg"
              />
            </div>
          </Link>

          <Link className="patent-frame">
            <div className="publication">
              <div className="project-inner">
                <div className="publications-wrapper">
                  <div className="nav-text">Patent</div>
                </div>
              </div>
              <img
                className="icon-home6"
                alt=""
                src="/heroiconsdocumentchecksolid.svg"
              />
            </div>
          </Link>

          <Link className="awards-frame">
            <div className="publication">
              <div className="project-inner">
                <div className="publications-wrapper">
                  <div className="nav-text">Awards</div>
                </div>
              </div>
              <img className="icon-home6" alt="" src="/dashiconsawards.svg" />
            </div>
          </Link>

          <Link className="faculty-wrapper" to={'/admin/FacultyAD'}>
            <div className="publication">
              <img
                className="icon-home6"
                alt=""
                src="/iconparkoutlinefilestaffone.svg"
              />
              <div className="project-inner">
                <div className="publications-wrapper">
                  <div className="nav-text">{`Faculty `}</div>
                </div>
              </div>
            </div>
          </Link>

          <Link className="users-wrapper" to={'/admin/manageRequest'}>
            <div className="publication">
              <div className="project-inner">
                <div className="publications-wrapper">
                  <div className="nav-text">Manage Request</div>
                </div>
              </div>
              <img
                className="icon-home6"
                alt=""
                src="/materialsymbolsgroupsrounded.svg"
              />
            </div>
          </Link>

          <Link className="notification-wrapper" to={'/user/notification'}>
            <div className="notification3">
              <img className="icon-home6" alt="" src="/iconnotification.svg" />
              <div className="project-inner">
                <div className="publications-wrapper">
                  <div className="nav-text">Notifications</div>
                </div>
              </div>
            </div>
          </Link>

          <Link className="support-wrapper1">
            <div className="notification3">
              <img className="icon-home6" alt="" src="/iconsupport.svg" />
              <div className="project-inner">
                <div className="publications-wrapper">
                  <div className="nav-text">Support</div>
                </div>
              </div>
            </div>
          </Link>

          <Link className="settings-wrapper1" to={'/user/settings'}>
            <div className="notification3">
              <img className="icon-home6" alt="" src="/iconsettings1.svg" />
              <div className="project-inner">
                <div className="publications-wrapper">
                  <div className="nav-text">Settings</div>
                </div>
              </div>
            </div>
          </Link>

          <div className="nav-facinfo4">
            <Link className="btn-expand1" onClick={props.toggleNavbar}>
              <div className="ellipse-div" />
              <div className="btn-expand-child1" />
              <div className="btn-expand-child2" />
            </Link>
            <p className="facultyid4">{email}</p>
            <p className="facultyname4">{name}</p>
            <img className="facultyphoto-icon2" alt="" src="/facultyphoto.svg" />
          </div>

          <Link className="logout-wrapper3" onClick={openLogOutPopup}>
            <div className="publication">
              <img className="bookopentext-icon2" alt="" src="/iconlogout.svg" />
              <div className="project-inner">
                <div className="publications-wrapper">
                  <div className="nav-text">LOGOUT</div>
                </div>
              </div>
            </div>
          </Link>

          <p className="general">GENERAL</p>
          <p className="admin">ADMIN</p>
          <img className="navbar-line" alt="" src="/line-3.svg" />
          <img className="navbar-item" alt="" src="/line-3.svg" />
          <p className="other">OTHER</p>
        </div>
      </div>

      {/*isLogOutPopupOpen &&
        (<PortalPopup placement="Centered" overlayColor="rgba(0,0,0,0.5)" onOutsideClick={closeLogOutPopup}>
          <PopupRegular onClose={closeLogOutPopup} heading={"Are you sure you want to logout?"}
            subText={"Come Back Soon !"} icon={"/icons/Logout.svg"} onConfirm={onLogout}
          />
  </PortalPopup>)*/}
    </>
  );
};

export default NavBarAD;
