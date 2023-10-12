import ModuleList from "../Modules/ModulesList";
import Status from "../Status/Status";


function Home() {
    return (
        <div className="d-flex flex-row">
            <ModuleList />
            <Status/>
        </div>
    );
}
export default Home;