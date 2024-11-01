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

    const [selectedPlayers, setSelectedPlayers] = useState([]);


    const handleSelectedPlayers = (player) => {
        const isExist = selectedPlayers.find((p) => p.id === player.id);
        if (isExist) {
            alert("Player already selected");
        } else {
            setSelectedPlayers([...selectedPlayers, player]);
        }
    }

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

    // console.log(isActive);

    return (
        <>
            <Navbar></Navbar>
            <Header></Header>

            <PlayerContainer
                isActive={isActive}
                handleIsActiveState={handleIsActiveState}
                handleSelectedPlayers={handleSelectedPlayers}
                selectedPlayers={selectedPlayers}
            ></PlayerContainer>
        </>
    );
}

export default App;
