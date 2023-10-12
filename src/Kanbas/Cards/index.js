import {Link} from "react-router-dom";
import background from "../img/purple.png"
import "./index.css"

const DashBoardCard = ({course}) =>{
    const courseId = course._id?.toString()
    const courseNum = course.number.toString()
    console.log(courseNum)
    return(
        <div className="card m-3" style={{ width: "270px", height: "300px"}}>
            <Link key={courseId} to={`/Kanbas/Courses/${courseId}`}>
            <img className="card-img-top" src={background} alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">{course.name}</h5>
                        <p className="card-text">{course.number}</p>
                    </div>
            </Link>
        </div>
    )

}

export default DashBoardCard
