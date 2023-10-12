import {Link, useLocation} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaBook, FaClock, FaInbox, FaNetworkWired, FaRegQuestionCircle, FaSignOutAlt, FaUser} from "react-icons/fa";
import {FaCalendarDays, FaGaugeHigh} from "react-icons/fa6";
import './index.css'
import northeastern from '../northeastern-logo.png'


function KanbasNavigation() {
    const links = [{name: "Account", icon: <FaUser size={40}/>}, {name: "Dashboard", icon: <FaGaugeHigh size={40}/>}, {
        name: "Course",
        icon: <FaBook size={40}/>
    }, {name: "Calendar", icon: <FaCalendarDays size={40}/>}, {name: "Inbox", icon: <FaInbox size={40}/>}, {
        name: "History",
        icon: <FaClock size={40}/>
    }, {name: "Studio", icon: <FaNetworkWired size={40}/>}, {name: "Commons", icon: <FaSignOutAlt size={40}/>}, {
        name: "Help",
        icon: <FaRegQuestionCircle size={40}/>
    }];
    const {pathname} = useLocation();
    return (
        <div className="list-group" style={{width: 175, height: "100vh"}}>
            <Link
                to={`/Kanbas/`}
                className={`list-group-item bg-dark text-white border-0`}>
                <div className="d-flex flex-column align-items-center mt-3 p-2">
                    <img className="w-75" src={northeastern} alt="logo"/>
                </div>
            </Link>
            {links.map((link, index) => (
                    <Link
                        key={index}
                        to={`/Kanbas/${link.name}`}
                        className={`list-group-item bg-dark text-white border-0 ${pathname.includes(link.name) && 'active' && 'bg-white'}`}>
                        <div className="d-flex flex-column align-items-center p-2 text-danger">
                           {link.icon}
                            <p className={`${pathname.includes(link.name) && 'active' && 'text-danger'}`}>{link.name}</p>
                        </div>
                    </Link>
            ))}
        </div>
    );
}

export default KanbasNavigation;