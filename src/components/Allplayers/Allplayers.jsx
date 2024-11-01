import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Player from "../Player/Player";

const Allplayers = ({ handleSelectedPlayers }) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch("./players.json")
            .then((res) => res.json())
            .then((data) => setPlayers(data));
    }, []);

    console.log(players);

    return (
        <div className="w-11/12 mx-auto">
            {
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {players.map((player) => (
                        <Player
                            key={player.id}
                            player={player}
                            handleSelectedPlayers={handleSelectedPlayers}
                        ></Player>
                    ))}
                </div>
            }
        </div>
    );
};
Allplayers.propTypes = {
    handleSelectedPlayers: PropTypes.func.isRequired,
};

export default Allplayers;
