import { Link , useLocation} from "react-router-dom";
function Nav() {
    const { pathname } = useLocation();
    return (
        <nav className="nav nav-tabs mt-2">
            <Link to="/project/"
                  className={`nav-link ${pathname.includes("home") ? "active" : ""}`}>Home</Link>
            <Link className={`nav-link ${pathname.includes("search") ? "active" : ""}`} to="/project/search">
                Search</Link>
            <Link className={`nav-link ${pathname.includes("signin") ? "active" : ""}`} to="/project/signin">
                SignIn</Link>
            <Link to="/project/signup"
                  className={`nav-link ${pathname.includes("signup") ? "active" : ""}`}>SignUp</Link>
            <Link to="/project/account"
                  className={`nav-link ${pathname.includes("account") ? "active" : ""}`}>Account</Link>
        </nav>
    );
}
export default Nav;