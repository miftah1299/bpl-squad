import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";
import PlayerContainer from "./components/PlayerContainer/PlayerContainer";
import Footer from "./components/Footer/Footer";

function App() {
    const [isActive, setIsActive] = useState({
        available: true,
        status: "available",
    });

    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const [price, setPrice] = useState(0);

    // claim price
    const claimPrice = () => {
        setPrice(price + 25000);
    };

    // handle selected players
    const handleSelectedPlayers = (player) => {
        // if not enough balance
        // if 6 players already selected
        const isExist = selectedPlayers.find((p) => p.id === player.id);
        if (isExist) {
            toast.error("Player already selected");
        } else if (price < player.price) {
            toast.error("Not enough balance");
        } else {
            if (selectedPlayers.length === 6) {
                toast.error("You can select maximum 6 players");
            } else {
                toast.success("Player selected");
                setPrice(price - player.price);
                setSelectedPlayers([...selectedPlayers, player]);
            }
        }
    };

    // handle remove player
    const handleRemovePlayer = (id) => {
        const remainingPlayers = selectedPlayers.filter((p) => p.id !== id);
        setSelectedPlayers(remainingPlayers);
    };

    // handle is active state
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
            <Header
                price={price}
                claimPrice={claimPrice}
                handleIsActiveState={handleIsActiveState}
            ></Header>

            <PlayerContainer
                isActive={isActive}
                handleIsActiveState={handleIsActiveState}
                handleSelectedPlayers={handleSelectedPlayers}
                selectedPlayers={selectedPlayers}
                handleRemovePlayer={handleRemovePlayer}
            ></PlayerContainer>

            <Footer></Footer>
            <ToastContainer />
        </>
    );
}

export default App;
