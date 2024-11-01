
import { useState, useEffect } from "react";
import Player from "../Player/Player";

const Allplayers = ({handleSelectedPlayers}) => {
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
                        <Player key={player.id} player={player}></Player>
                    ))}
                </div>
            }
        </div>
    );
};

export default Allplayers;
