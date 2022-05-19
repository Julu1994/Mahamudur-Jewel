import "./App.css";
import Header from "./components/header";
import Typewriter from "./components/sub-components/typewriter";

function App() {
    return (
        <div className="App">
            <Header />
            <Typewriter props={"hhello there"} />
        </div>
    );
}

export default App;
