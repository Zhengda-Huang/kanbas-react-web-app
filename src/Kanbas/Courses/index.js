import {Navigate, useParams} from "react-router-dom";
import Header from "../Header";
import CourseNavigation from "../CourseNavigation";
import {Route, Routes} from "react-router";
import ModuleList from "../Modules/ModulesList";
import Home from "../Home/Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import {useEffect, useState} from "react";
import axios from "axios";

function Courses() {
    const {courseId} = useParams();
    const API_BASE = process.env.REACT_APP_API_BASE;
    const URL = `https://kanbas-node-server-app-4si3.onrender.com/api/courses`;
    const [courses, setCourse] = useState({});
    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };

    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);

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
                            <Route
                                path="Assignments/add"
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