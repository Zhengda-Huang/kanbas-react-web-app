import * as client from "./client";
import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

function Accounts() {
    const { id } = useParams();
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };

    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };

    const save = async () => {
        await client.updateUser(account);
    };
    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }

    }, []);

    const signout = async () => {
        await client.signout();
        navigate("/project/signin");
    };

    return (
        <div className="w-50">
            <h1>Account</h1>
            {account && (
                <div className="form-group">
                    <div className="form-group">
                        <label For="">Password</label>
                        <input className="form-control" value={account.password}
                               onChange={(e) => setAccount({
                                   ...account,
                                   password: e.target.value
                               })}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input className="form-control" value={account.firstName}
                               onChange={(e) => setAccount({
                                   ...account,
                                   firstName: e.target.value
                               })}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input className="form-control" value={account.lastName}
                               onChange={(e) => setAccount({
                                   ...account,
                                   lastName: e.target.value
                               })}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Date of Birth</label>
                        <input className="form-control" value={account.dob}
                               onChange={(e) => setAccount({
                                   ...account,
                                   dob: e.target.value
                               })}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input className="form-control" value={account.email}
                               onChange={(e) => setAccount({
                                   ...account,
                                   email: e.target.value
                               })}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Role</label>
                        <select className="form-control" onChange={(e) => setAccount({
                            ...account,
                            role: e.target.value
                        })}>
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                        </select>
                    </div>
                </div>
            )}
            
            {account && (<button className="btn btn-primary" onClick={save}>
                Save
            </button>)
            }
            {account && (<button className="btn btn-danger" onClick={signout}>
                Signout
            </button>)}
            <br/>
            <Link to="/project/admin/users" className="btn btn-warning">
                Users
            </Link>
        </div>
    );
}

export default Accounts;