import "./App.scss";
import Header from "./components/header";
import Card from "./components/Card";
import notePic from "./components/resources/noteIMG.png";

function App() {
    return (
        <div className="App">
            <Header />
            <Card title="STICKY NOTES" pic={notePic} />
        </div>
    );
}

export default App;
