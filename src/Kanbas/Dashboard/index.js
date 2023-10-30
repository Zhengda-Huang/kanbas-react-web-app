import DashBoardCard from "../Cards/index"
import {useState} from "react";
import {Link} from "react-router-dom";

function Dashboard({
                       courses, course, setCourse, addNewCourse,
                       deleteCourse, updateCourse
                   }
) {

    const [edit, setEdit] = useState(false)
    const ChangeEdit = () => {
        setEdit(!edit)
    }
    return (
        !edit ?
            <div className="d-flex flex-row">
                <div className="dashboard ms-4">
                    <h1>Dashboard</h1>
                    <hr></hr>
                    <div className="cards ms-4">
                        <h2>Published Courses ({1})</h2>
                        <hr></hr>
                        <div className="d-flex flex-wrap flex-row">
                            {courses.map((course) => (
                                <DashBoardCard course={course} key={course.id}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={ChangeEdit} className="btn btn-secondary">Edit</button>
                </div>
            </div> :
            <div className="dashboard ms-4 w-100">
                <h1>Dashboard</h1>
                <hr></hr>
                <div className="d-flex flex-row">
                    <div className="w-75">
                        <h5>Course</h5>
                        <div className="mb-4 d-flex flex-column">
                            <div>
                                <input value={course.name} className="form-control"
                                       onChange={(e) => setCourse({...course, name: e.target.value})}/>
                                <input value={course.number} className="form-control"
                                       onChange={(e) => setCourse({...course, number: e.target.value})}/>
                                <input value={course.startDate} className="form-control" type="date"
                                       onChange={(e) => setCourse({...course, startDate: e.target.value})}/>
                                <input value={course.endDate} className="form-control" type="date"
                                       onChange={(e) => setCourse({...course, endDate: e.target.value})}/>
                            </div>

                            <div className="ms-auto">
                                <button className="btn btn-success" onClick={addNewCourse}>
                                    Add
                                </button>
                                <button className="btn btn-danger" onClick={updateCourse}>
                                    Update
                                </button>
                            </div>
                        </div>


                        <div className="list-group">
                            {courses.map((course) => (
                                <Link key={course._id}
                                      to={`/Kanbas/Courses/${course._id}`}
                                      className="list-group-item">
                                    <div className="d-flex flex-row">
                                        <div>
                                            {course.name}
                                        </div>
                                        <div className="ms-auto">
                                            <button className="btn btn-warning me-3"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    }}>
                                                Edit
                                            </button>

                                            <button
                                                className="btn btn-danger"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="w-25 ms-auto">
                        <button onClick={ChangeEdit} className="btn btn-secondary">Edit</button>
                    </div>
                </div>
            </div>
    );
}

export default Dashboard;