import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import Allplayers from "../Allplayers/Allplayers";

const Selected = ({
    selectedPlayers,
    handleRemovePlayer,
    handleSelectedPlayers,
}) => {
    const [istrue, setIstrue] = useState(false);
    // a function onclick go to allplayers
    const handleClick = () => {
        setIstrue(true);
    };

    return (
        <div className="w-11/12 mx-auto space-y-6">
            {selectedPlayers.map((player) => (
                <div
                    key={player.id}
                    className="flex justify-between items-center border rounded-xl p-6"
                >
                    <div className="flex gap-6">
                        <div>
                            <img
                                className="w-16 h-16 rounded-xl"
                                src={player.image}
                                alt="player image"
                            />
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-lg font-semibold">
                                {player.name}
                            </h1>
                            <p className="text-sm text-zinc-400">
                                {player.handedness}
                            </p>
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                handleRemovePlayer(player.id);
                                toast("Player Removed");
                            }}
                            className="text-red-600 hover:text-red-700"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                />
                            </svg>
                        </button>
                        {/* <ToastContainer /> */}
                    </div>
                </div>
            ))}

            <div className="inline-block border border-black rounded-xl p-2">
                <button
                    onClick={() => handleClick(true)}
                    className="bg-primary p-3 px-5 rounded-lg text-black font-semibold"
                >
                    Add More Player
                </button>
            </div>

            {istrue ? (
                <Allplayers
                    handleSelectedPlayers={handleSelectedPlayers}
                ></Allplayers>
            ) : (
                <></>
            )}
        </div>
    );
};

Selected.propTypes = {
    selectedPlayers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    handleSelectedPlayers: PropTypes.func.isRequired,
    handleIsActiveState: PropTypes.func.isRequired,
    isActive: PropTypes.shape({
        available: PropTypes.bool.isRequired,
    }).isRequired,
    handleRemovePlayer: PropTypes.func.isRequired,
};

export default Selected;
