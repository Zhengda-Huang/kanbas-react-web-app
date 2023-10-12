import React from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import db from "../../../Database";
import GreenCheck from "../../../GreenCheck/GreenCheck";
import {FaEllipsisV} from "react-icons/fa";


function AssignmentEditor() {
    const {assignmentId} = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const {courseId} = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div className="me-5">
            <div className="d-flex flex-row align-items-center justify-content-end">
                <GreenCheck/>
                <p className="text-success mb-0 me-3">Published</p>
                <button className="btn btn-secondary"><FaEllipsisV/></button>
            </div>
            <hr/>
            <h5>Assignment Name</h5>
            <input value={assignment.title}
                   className="form-control mb-2"/>

            <hr/>
            <div className="d-flex flex-row justify-content-end">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                      className="btn btn-secondary h-25">
                    Cancel
                </Link>
                <button onClick={handleSave} className="btn btn-danger me-2">
                    Save
                </button>
            </div>
            <hr/>
        </div>
    );
}


export default AssignmentEditor;