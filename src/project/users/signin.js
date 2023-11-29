import * as client from "./client";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Signin() {
    const [credentials, setCredentials] = useState({username: "", password: ""});
    const navigate = useNavigate();
    const signin = async () => {
        await client.signin(credentials);
        navigate("/project/account");
    };

    return (
        <div className={"form-group"}>
            <h1>Signin</h1>
            <div className="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input id="exampleInputEmail1" className="form-control" value={credentials.username}
                       onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input id="exampleInputPassword1" className="form-control" value={credentials.password}
                       onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
            </div>
            <button type="submit" className={"btn btn-primary"} onClick={signin}> Signin</button>
        </div>
    );
}

export default Signin;