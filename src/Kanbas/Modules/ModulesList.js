import React from "react";
import {useParams} from "react-router-dom";
import db from "../Database";
import {FaAngleDown, FaCheck, FaEllipsisV, FaPlus} from "react-icons/fa";
import "./ModulesList.css"
import CheckIconWithCircle from "../GreenCheck/GreenCheck";


function ModuleList() {
    const {courseId} = useParams();
    const modules = db.modules;
    return (
        <div className="w-75 me-5">
            <div className="d-flex w-auto">
                <button type="button" className="btn btn-secondary m-1">Collapse All</button>
                <button type="button" className="btn btn-secondary m-1">View Progress</button>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle m-1" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                        Publish All
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Publish</a></li>
                        <li><a className="dropdown-item" href="#">Unpublish</a></li>
                    </ul>
                </div>
                <button type="button" className="btn btn-danger m-1"><i className="fa fa-plus" aria-hidden="true"></i>
                    Modulo
                </button>
                <button type="button" className="btn btn-secondary m-1"><i className="fa fa-plus" aria-hidden="true"></i>
                    <FaEllipsisV/>
                </button>
            </div>
            <hr/>
            <ul className="Modules-list list-group">
                {
                    modules
                        .filter((module) => module.course === courseId)
                        .map((module, index) => (
                            <li key={index} className="list-group-item list-group-item-secondary">
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <FaEllipsisV/>
                                    <FaEllipsisV/>
                                    {module.name}
                                </div>

                                <div className="float-end ms-auto" style={{display: 'flex', alignItems: 'center'}}>
                                    <div className="d-flex flex-row align-items-center me-3">
                                        <CheckIconWithCircle/>
                                        <FaAngleDown/>
                                    </div>
                                    <FaPlus className="me-3"/>
                                    <FaEllipsisV/>
                                </div>
                            </li>
                        ))
                }
            </ul>
        </div>
    );
}

export default ModuleList;