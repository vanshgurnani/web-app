import { useEffect, useContext,useState } from "react";

import HomeTile from "./HomeTile";
import { useNavigate } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import MiniNavBarAD from "../components/MiniNavBarAD";
import NavBarAD from "../components/NavBarAD";
import "../components/HOMEPAGE.css";

// import UserContext from "../context/UserContext";
// import LoginContext from "../context/LoginContext";

const HOMEPAGE = () => {

  const [showMinivabar, setShowMinivabar] = useState(false);

  const toggleNavbar = () => {
    setShowMinivabar(!showMinivabar);
  };
  // const { UpdateName } = useContext(LoginContext);
  // const handleUpdateName = () => {
  //   UpdateName('Home');
  // };

  // useEffect(() => {
  //   handleUpdateName();
  // }, [UpdateName]);

  // const { userData, getUser } = useContext(UserContext);
  // const { token } = useContext(LoginContext);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (token) {
  //     getUser();
  //   } else {
  //     navigate("/");
  //   }
  // }, [token]);



  return (
    <>
        {showMinivabar ? (
          <MiniNavBarAD showMinivabar={showMinivabar} toggleNavbar={toggleNavbar} /> ) : ( <NavBarAD toggleNavbar={toggleNavbar} />
      )}
      <TopNavbar name={"Home"} />

      <div className="frame-details">

        <h1 className="text-personaldetails">Personal details</h1>

        <div className="group-combined group-details">
          <img className="image-dp-icon" alt="" src="/rectangle-60.svg" />

          <label className="text-name">Name</label>
          <div className="input-name details">Vansh Gurnani</div>

          <label className="text-designation">Designation</label>
          <div className="input-designation details">developer</div>

          <label className="text-doj">Date of Join</label>
          <div className="input-doj details">2020-01-01</div>


          <label className="text-phoneno">Phone Number</label>
          <div className="input-phoneno details">9821817966</div>

          <label className="text-email">Email</label>
          <div className="input-email details">Test@gmail.com</div>

          <label className="text-school">School</label>
          <div className="input-school details">JPHS</div>

        </div>
      </div >

      <div className="frame-summary">
        <h1 className="text-summary">Summary</h1>
        <HomeTile className={"group-rp"} heading={"Publication"} total={15} thisYear={4} link={'/user/Publication'} logo={"/31313555-researchpaperhdpngdownloadremovebgpreview-2.svg"} />
        <HomeTile className={"group-s"} heading={"Seminars"} total={25} thisYear={10} link={'/user/Seminars'} logo={"/istockphoto1184658011612x612removebgpreview-2.svg"} />
        <HomeTile className={"group-t"} heading={"Patents"} total={2} thisYear={1} link={'/user/Patents'} logo={"/journal-1.svg"} />
      </div>
    </>
  );
};

export default HOMEPAGE;
