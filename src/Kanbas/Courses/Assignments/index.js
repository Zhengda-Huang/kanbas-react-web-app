import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {FaBook, FaEllipsisV, FaPlus} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import GreenCheck from "../../GreenCheck/GreenCheck";
import {deleteAssignment, setAssignments} from "./assignmentReducer";
import {deleteAssignmentC, findAssignmentForCourse} from "./assignmentService";
function Assignments() {
    const {courseId} = useParams();
    const assignments = useSelector((state) => state.assignmentReducer.assignments);
    const dispatch = useDispatch();

    const courseAssignments = useEffect(() => {
        findAssignmentForCourse(courseId)
            .then((assignments) =>
                dispatch(setAssignments(assignments))
            );
    }, [courseId]);

    const handleDelete = (assignmentId) =>{
        console.log(assignmentId)
        deleteAssignmentC(assignmentId).then((status) => {
            dispatch(deleteAssignment(assignmentId));
        });
    }

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
                    <Link className="btn btn-danger"
                          to={`/Kanbas/Courses/${courseId}/Assignments/add`}>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        Assignment
                    </Link>
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
                {assignments.map((assignment) => (
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
                            <p className="text-black">Due Date {assignment.dueDate}</p>
                        </div>

                        <div className="d-flex flex-row float-end align-items-center">
                            <div>
                                <button className="btn btn-danger" onClick={(event) => {
                                    dispatch(() => handleDelete(assignment._id))
                                    event.preventDefault()
                                }}>Delete</button>
                            </div>
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