import React from 'react'
import "../components/HOMEPAGE.css";
import { Link } from 'react-router-dom';

const HomeTile = (props) => {
    return (
        <>
            <div className={props.className}>
                <div className="rectangle-j" />
                <img className="image-j-icon" alt="" src={props.logo} />
                <Link className="text-j-1" to={props.link}>{`Total ` + props.heading}</Link>
                <h3 className="text-j-3">{props.total}</h3>
                <p className="text-j-2">{`+ ${props.thisYear} in Total Year`}</p>
                <img className="group-t-child" alt="" src="/line-3.svg" />
            </div>
        </>
    )
}

export default HomeTile