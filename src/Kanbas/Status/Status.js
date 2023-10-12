import {Link} from "react-router-dom";
import "./Status.css"
function Status(){
    const buttons = [
        'Importing Existing Content',
        'Importing From Commons',
        'Choose Home Page',
        'View Course Streams',
        'New Announcement',
        'New Analytics',
        'View Course Notifications',
    ];
    return(
        // d-none d-xl-block
        <div className="float-end w-25 ms-3">
            <ul className="list-group mb-2">
                {
                    buttons.map((button, index) =>(
                        <Link
                            to={"#"}
                            key={index}
                            className={"list-group-item list-group-item-light"}>
                            <div className="d-flex flex-column p-2 text-danger mb-0">
                                <p className="text-secondary">{button}</p>
                            </div>
                        </Link>
                    ))
                }
            </ul>

            <div className="mb-2">
                <h5>To Do</h5>
                <hr/>
            </div>
            <div>
                <div className="d-flex flex-row">
                    <p className="me-5">Comming Up</p>
                    {/*<p><a href="#">View Calendar</a></p>*/}
                </div>
                <hr/>

                    <ul className="list-group">
                        <li className="list-group-item border-0">Lecture CS4550.12631.202410 Sep 7 at 11:45am</li>
                        <li className="list-group-item border-0">Lecture CS4550.12631.202410 Sep 11 at 11:45am</li>
                        <li className="list-group-item border-0">CS5610 06 SP23 Lecture Sep 11 at 6pm</li>
                    </ul>
            </div>
        </div>
    )

}

export default Status