import React from 'react'
import "../components/HOMEPAGE.css";
import '../components/TopNavbar.css'
import { useNavigate } from "react-router-dom";

const TopNavbar = ({ name, secondName, thirdName, toPage }) => {
    const navigate = useNavigate();

    const onNavClick = () => {
        secondName && navigate(toPage);
    }

    return (
        <div className="frame-home">
            <button onClick={onNavClick} className="top_name">{name} </button>
            <div className="top_sec_name" style={(name?.length > 10) ? { left: '162px' } : null}>{secondName ? "/ " + secondName : ""}</div>
            <div className="top_sec_name" style={{ left: '255px' }}>{(secondName && thirdName) ? "/ " + thirdName : ""}</div>

            <img className="image-mitlogo-icon" alt="" src="/helloremovebgpreview-1.svg" />

            <div className="serach-bar">
                <button className="group-searchicon">
                    <img className="icon-search" alt="" src="/icon.svg" />
                </button>
                <input className="text-inputfield" type="text" placeholder="Type here...." style={{ outline: 'none' }} />
            </div>

            <button className="icon-settings">
                <img className="group-icon" alt="" src="/group.svg" />
            </button>

            <button className="icon-darkmode">
                <img className="vector-icon" alt="" src="/vector.svg" />
            </button>

        </div>
    )
}

export default TopNavbar;