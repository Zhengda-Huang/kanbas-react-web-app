import React from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import GreenCheck from "../../../GreenCheck/GreenCheck";
import {FaEllipsisV} from "react-icons/fa";
import {useSelector, useDispatch} from "react-redux";
import {
    addAssignment,
    setAssignment,
    updateAssignment,
} from "../assignmentReducer";


function AssignmentEditor() {
    const {assignmentId} = useParams();
    const assignmentList = useSelector((state) => state.assignmentReducer.assignments);
    const assignmentState = useSelector((state) => state.assignmentReducer.assignment);
    console.log(assignmentState)
    const findAssignment = assignmentList.find(
        (assignment) => assignment._id === assignmentId)
    const assignment = findAssignment ? findAssignment : assignmentState;
    const {courseId} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
            <div className="container justify-content-center">
                <div className="col mb-3">
                    <p>Assignment Name</p>
                    <input type="text" onChange={(e) =>
                        dispatch(setAssignment({...assignment, title: e.target.value}))}
                           className="form-control mb-3" placeholder={assignment.title}></input>
                    <textarea className="form-control"
                              onChange={(e) =>
                                  dispatch(setAssignment({...assignment, description: e.target.value}))}
                              rows="5">{assignment.description}</textarea>
                </div>
                <div className="bottom-content">
                    <div className="row mb-3">
                        <label htmlFor="static-point" className="point col-sm col-form-label ">Point</label>
                        <input type="number" className="col ms-0" id="static-point" value="100"></input>
                    </div>
                </div>
                <div className="row">
                    <label className="col">
                        Assign
                    </label>
                    <div className="d-flex flex-column col w-75">
                        <form className="form-check border p-3">
                            <div className="mb-4">
                                <label htmlFor="startDate">
                                    Due
                                </label>
                                <input onChange={(e) =>
                                    dispatch(setAssignment({...assignment, dueDate: e.target.value}))
                                } id="startDate" value={assignment.dueDate} className="form-control" type="date"/>
                            </div>
                            <div className="d-flex flex-row">
                                <label htmlFor="available">
                                    Available from
                                </label>
                                <input id="available"
                                       onChange={(e) =>
                                           dispatch(setAssignment({...assignment, availableFromDate: e.target.value}))}
                                       value={assignment.availableFromDate} className="form-control" type="date"/>
                                <label htmlFor="until">
                                    Until to
                                </label>
                                <input id="until"
                                       onChange={(e) =>
                                           dispatch(setAssignment({...assignment, availableUntilDate: e.target.value}))}
                                       value={assignment.availableUntilDate} className="form-control" type="date"/>
                            </div>
                        </form>
                    </div>
                </div>

                <hr/>
                <div className="d-flex flex-row justify-content-end">
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                          className="btn btn-secondary h-25">
                        Cancel
                    </Link>
                    <button onClick={(e) => {
                        assignmentList.find((assignmentInList) => assignmentInList._id === assignment._id) ?
                            (dispatch(updateAssignment(assignmentState)) &&
                            dispatch(setAssignment({ title: "Assignment", description: "New Description", dueDate: "2023-10-23",
                                availableFromDate: "2023-10-23", availableUntilDate: "2023-10-23"}))):
                        dispatch(addAssignment({...assignment, course: courseId}))
                        handleSave()
                        }
                    } className="btn btn-danger me-2">
                        Save
                    </button>
                </div>
                <hr/>
            </div>
        </div>
    );
}


export default AssignmentEditor;