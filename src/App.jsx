import "./App.css";
import Available from "./components/Available/Available";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";
import Selected from "./components/Selected/Selected";

function App() {
    return (
        <>
            <Navbar></Navbar>
            <Header></Header>
            <Available></Available>
            <Selected></Selected>
        </>
    );
}

export default App;
