import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";
import PlayerContainer from "./components/PlayerContainer/PlayerContainer";

function App() {
    const [isActive, setIsActive] = useState({
        available: true,
        status: "available",
    });
    const handleIsActiveState = (status) => {
        if (status == "available") {
            setIsActive({
                available: true,
                status: "available",
            });
        } else {
            setIsActive({
                available: false,
                status: "selected",
            });
        }
    };

    console.log(isActive);

    return (
        <>
            <Navbar></Navbar>
            <Header></Header>

            <PlayerContainer
                isActive={isActive}
                handleIsActiveState={handleIsActiveState}
            ></PlayerContainer>
        </>
    );
}

export default App;
