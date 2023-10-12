import {Link} from "react-router-dom";
import db from "../Database";
import DashBoardCard from "../Cards/index"
function Dashboard() {
    const courses = db.courses;
    return (
        <div className="dashboard ms-4">
            <h1>Dashboard</h1>
            <hr></hr>
            <div className="cards ms-4">
                <h2 >Published Courses ({courses.length})</h2>
                <hr></hr>
                <div className="d-flex flex-wrap flex-row">
                    {courses.map((course) => (
                        <DashBoardCard course={course} key={course.id}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;