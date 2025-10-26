import "./App.css";
import UncontrolledForm from "./UncontrolledForm";
import ControlledForm from "./ControlledForm";

function App() {
    return (
        <div className="App">
            <h2>Controlled vs Uncontrolled Demo</h2>
            <ControlledForm />
            <hr />
            <UncontrolledForm />
        </div>
    );
}

export default App;
