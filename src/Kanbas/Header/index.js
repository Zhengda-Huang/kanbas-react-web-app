import {FaBars} from "react-icons/fa";
import "./index.css"
import React from "react";
import {Link, useParams} from "react-router-dom";

const Header = () => {
    const params = useParams();
    const courseId = params.courseId
    const tab = params["*"]
    console.log(tab)

    return (
        <div className="header d-flex flex-row w-100">
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <FaBars className="text-danger fa-10x me-4"/>
            </div>
            <nav aria-label="breadcrumb" className="text-center mt-3 justify-content-center">
                <ol className="breadcrumb">
                    <Link className="breadcrumb-item">{courseId}</Link>
                    <li className="breadcrumb-item active" aria-current="page">{tab}</li>
                </ol>
            </nav>
        </div>
    )
}

export default Header