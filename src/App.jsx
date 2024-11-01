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

    const [price, setPrice] = useState(0);

    const claimPrice = (play) => {
        setPrice(price + 5000000);
    }

    const handleSelectedPlayers = (player) => {
        const isExist = selectedPlayers.find((p) => p.id === player.id);
        if (isExist) {
            alert("Player already selected");
        } else {
            alert("Player selected");
            setSelectedPlayers([...selectedPlayers, player]);
        }
    };

    const handleRemovePlayer = (id) => {
        const remainingPlayers = selectedPlayers.filter((p) => p.id !== id);
        setSelectedPlayers(remainingPlayers);
    };

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
            <Navbar price={price}></Navbar>
            <Header price={price} claimPrice={claimPrice}></Header>

            <PlayerContainer
                isActive={isActive}
                handleIsActiveState={handleIsActiveState}
                handleSelectedPlayers={handleSelectedPlayers}
                selectedPlayers={selectedPlayers}
                handleRemovePlayer={handleRemovePlayer}
            ></PlayerContainer>
        </>
    );
}

export default App;
