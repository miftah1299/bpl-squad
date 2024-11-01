// import React from "react";
import PropTypes from "prop-types";

const Selected = ({ selectedPlayers }) => {
    return (
        <div className="w-11/12 mx-auto">
            <div>
                <h1 className="text-xl font-semibold">
                    Selected Players (0/6)
                </h1>
            </div>

            {selectedPlayers.map((player) => (
                <div
                    key={player.id}
                    className="flex justify-between items-center border-b border-zinc-500 py-2"
                >
                    <div>
                        <h1 className="text-lg font-semibold">{player.name}</h1>
                    </div>
                    <div>
                        <button className="bg-red-600 text-white p-2 px-4 rounded-xl">
                            Remove
                        </button>
                    </div>
                </div>
            ))}
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
};

export default Selected;
