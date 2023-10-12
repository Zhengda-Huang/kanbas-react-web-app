import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css"


function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussion", "Announcements", "Pages"];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div className="middle-nav" style={{ width: 150 }}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/Courses/${courseId}/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"} ${pathname.includes(link) && "highlight"}`}>
                    {link}
                </Link>
            ))}
        </div>
    );
}


export default CourseNavigation;