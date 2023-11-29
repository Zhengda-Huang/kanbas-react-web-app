import Signin from "./users/signin"
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./Nav/Nav"
import Accounts from "./users/accounts";
import UserTable from "./users/table";
import Signup from "./users/signup";

function Project() {
    return (
        <div>
            <div >
                <Nav />
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="/project/home" />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/account" element={<Accounts />} />
                    <Route path="/account/:id" element={<Accounts />} />
                    <Route path="/admin/users" element={<UserTable />} />
                </Routes>
            </div>
        </div>
    );
}
export default Project;