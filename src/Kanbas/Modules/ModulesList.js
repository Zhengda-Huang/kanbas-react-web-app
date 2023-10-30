import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {FaAngleDown, FaEllipsisV, FaPlus} from "react-icons/fa";
import "./ModulesList.css"
import CheckIconWithCircle from "../GreenCheck/GreenCheck";
import {useDispatch, useSelector} from "react-redux";
import {addModule, deleteModule, setModule, updateModule,} from "./modulesReducer";


function ModuleList() {
    const {courseId} = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false)


    const ChangeEdit = () => {
        setEdit(!edit)
    }
    return (
        <div className="w-75 me-5">
            <div className="d-flex w-auto">
                <button type="button" className="btn btn-secondary m-1">Collapse All</button>
                <button type="button" className="btn btn-secondary m-1">View Progress</button>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle m-1" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                        Publish All
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Publish</a></li>
                        <li><a className="dropdown-item" href="#">Unpublish</a></li>
                    </ul>
                </div>
                <button type="button" className="btn btn-danger m-1"><i className="fa fa-plus" aria-hidden="true"></i>
                    Modulo
                </button>
                <button type="button" className="btn btn-secondary m-1"><i className="fa fa-plus"
                                                                           aria-hidden="true"></i>
                    <FaEllipsisV/>
                </button>
                <button type="button" onClick={ChangeEdit} className="btn btn-secondary m-1"><i className="fa fa-plus"
                                                                                                aria-hidden="true"></i>
                    Edit
                </button>
            </div>
            <hr/>

            {!edit ?
                <ul className="Modules-list list-group">
                    {
                        modules
                            .filter((module) => module.course === courseId)
                            .map((module, index) => (
                                <li key={index} className="list-group-item list-group-item-secondary">
                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                        <FaEllipsisV/>
                                        <FaEllipsisV/>
                                        {module.name}
                                    </div>

                                    <div className="float-end ms-auto" style={{display: 'flex', alignItems: 'center'}}>
                                        <div className="d-flex flex-row align-items-center me-3">
                                            <CheckIconWithCircle/>
                                            <FaAngleDown/>
                                        </div>
                                        <FaPlus className="me-3"/>
                                        <FaEllipsisV/>
                                    </div>
                                </li>
                            ))
                    }
                </ul> :
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="d-flex flex-column">
                            <input
                                className="mb-2"
                                value={module.name}
                                onChange={(e) =>
                                    dispatch(setModule({...module, name: e.target.value}))
                                }/>
                            <textarea
                                className="mb-2"
                                value={module.description}
                                onChange={(e) =>
                                    dispatch(setModule({...module, description: e.target.value}))
                                }/>
                        </div>
                        <div>
                            <button
                                className="btn btn-success"
                                onClick={() => dispatch(addModule({...module, course: courseId}))}>
                                Add
                            </button>
                            <button
                                className="btn btn-warning"
                                onClick={() => dispatch(updateModule(module))}>
                                Update
                            </button>
                        </div>
                    </li>
                    {modules
                        .filter((module) => module.course === courseId)
                        .map((module, index) => (
                            <li key={index} className="list-group-item">
                                <h3>{module.name}</h3>
                                <p className="text-black">{module.description}</p>
                                <p className="text-black">{module._id}</p>

                                <div>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => dispatch(setModule(module))}>
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => dispatch(deleteModule(module._id))}>
                                        Delete
                                    </button>
                                </div>
                            </li>))}
                </ul>
            }

        </div>
    );
}

export default ModuleList;