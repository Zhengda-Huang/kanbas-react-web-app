import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {FaBook, FaEllipsisV, FaPlus} from "react-icons/fa";
import GreenCheck from "../../GreenCheck/GreenCheck";


function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div className="me-5">
            <div className="d-flex justify-content-between ">
                <div>
                    <input type="text" className="form-control" aria-describedby="emailHelp"
                           placeholder="Search for Assignment"/>
                </div>
                <div className="d-flex flex-row float-end">
                    <button className="btn btn-secondary">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        Group
                    </button>
                    <button className="btn btn-danger">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        Assignment
                    </button>
                    <button className="btn btn-secondary">
                        <FaEllipsisV/>
                    </button>
                </div>
            </div>
            <hr/>

            <div className="list-group">
                <li className="d-flex flex-row list-group-item list-group-item-secondary">
                    <div className="d-flex flex-row align-items-center me-auto">
                        <div className="me-3">
                           <FaEllipsisV/>
                            <FaEllipsisV/>
                        </div>
                        <i className="fa fa-caret-down me-3" aria-hidden="true"></i>
                        <p className="fs-5 text-black mb-0">Assignments</p>
                    </div>
                    <di className="d-flex flex-row align-items-center">
                        <p className="d-block me-3 fs-5 border border-secondary text-black rounded mb-0">40% of Total</p>
                        <FaPlus className="me-2"/>
                        <FaEllipsisV/>
                    </di>
                </li>
                {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item  d-flex flex-row">
                            <div className="me-3 d-flex flex-row align-items-center">
                                <FaEllipsisV/>
                                <FaEllipsisV className="me-3"/>
                                <FaBook className="text-success"/>
                            </div>

                            <div className="me-auto justify-content-center">
                                    <h5>{assignment.title}</h5>
                            </div>

                            <div className="d-flex flex-row float-end align-items-center">
                                <GreenCheck/>
                                <FaEllipsisV/>
                            </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Assignments;