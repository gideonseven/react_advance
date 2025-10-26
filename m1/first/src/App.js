import "./App.css";
import DessertsList from "./DessertsList";
import {desserts} from "./data/Desserts"

function App() {
    return (
        <div className="App">
            <h2>List of low calorie desserts:</h2>
            <DessertsList data={desserts}/>
        </div>
    );
}

export default App;
