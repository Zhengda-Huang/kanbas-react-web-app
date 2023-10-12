import db from "../../Database";
import {useParams} from "react-router-dom";
import {FaCog} from "react-icons/fa";

function Grades() {
    const {courseId} = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div>
            <div className="mb-3 d-flex flex-row-reverse">
                <div className="d-block">
                    <button className="btn btn-secondary">
                        <i className="fas fa-file-import"></i>
                        Import
                    </button>
                    <button className="btn btn-secondary">
                        <i className="fas fa-file-export"></i>
                        Export
                    </button>
                    <button className="btn btn-secondary">
                        <FaCog/>
                    </button>
                </div>
            </div>

            <div className="row">
                <div className="col-sm">
                    <label htmlFor="student-name"
                           className="form-label align-content-center">
                        Student Names</label>
                    <input type=" email"
                           class=" form-control"
                           id=" student-name"
                           placeholder=" Search Student Names"/>
                </div>
                <div class=" col-sm">
                    <label for=" assignment-name"
                           class=" form-label align-content-center">
                        Assignment Name</label>
                    <input type=" email"
                           class=" form-control"
                           id=" assignment-name"
                           placeholder=" Search Assignment Name"/>
                </div>
            </div>

            <div class=" mt-3 mb-3 d-flex">
                <button class=" d-flex flex-row btn btn-secondary">
                    <i class=" fa fa-filter align-content-center me-2"></i>
                    <p class=" mb-0">Apply Filter</p>
                </button>
            </div>
            <div className="table-responsive mt-4">
                <table className="table table-bordered">
                    <thead>
                    <th>Student Name</th>
                    {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                    {enrollments.map((enrollment) => {
                        const user = db.users.find((user) => user._id === enrollment.user);
                        return (
                            <tr>
                                <td className="text-danger">{user.firstName} {user.lastName}</td>
                                {assignments.map((assignment) => {
                                    const grade = db.grades.find(
                                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                    return (<td>{grade?.grade || ""}</td>);
                                })}
                            </tr>);
                    })}          </tbody>
                </table>
            </div>
        </div>);
}

export default Grades;