import db from "../../Kanbas/Database";
import {Navigate, useParams} from "react-router-dom";
import Header from "../Header";
import CourseNavigation from "../CourseNavigation";
import {Route, Routes} from "react-router";
import ModuleList from "../Modules/ModulesList";
import Home from "../Home/Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";


function Courses() {
    const {courseId} = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    return (
        <div className={`ms-4 w-100`}>
            <Header/>
            <hr/>
            <div className="d-flex flex-row w-auto">
                <CourseNavigation/>
                <div className="w-100">
                        <Routes>
                            <Route path="/" element={<Navigate to="Home"/>}/>
                            <Route path="Home" element={<Home/>}/>
                            <Route path="Modules" element={<ModuleList/>}/>
                            <Route path="Assignments" element={<Assignments/>}/>
                            <Route
                                path="Assignments/:assignmentId"
                                element={<AssignmentEditor/>}
                            />
                            <Route path="Grades" element={<Grades/>}/>
                        </Routes>
                </div>
            </div>
        </div>
    );
}

export default Courses;