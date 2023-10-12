import './App.css';
import HelloWorld from "./labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import {HashRouter, Navigate} from 'react-router-dom';
import {Routes, Route} from "react-router";
import Labs from "./labs";

function App() {
    return (
        <HashRouter>
            <div style={{height: "100%"}}>
                <Routes>
                    <Route path="/"       element={<Navigate to="/Labs"/>}/>
                    <Route path="/hello"  element={<HelloWorld/>}/>
                    <Route path="/Labs/*"   element={<Labs/>}/>
                    <Route path="/Kanbas/*" element={<Kanbas/>}/>
                </Routes>
            </div>
        </HashRouter>
    );
}


export default App;
