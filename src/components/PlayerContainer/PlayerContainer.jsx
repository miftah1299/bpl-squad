import PropTypes from "prop-types";
import Selected from "../Selected/Selected";
import Allplayers from "../Allplayers/Allplayers";

const PlayerContainer = ({
    handleIsActiveState,
    isActive,
    selectedPlayers,
    handleSelectedPlayers,
    handleRemovePlayer,
}) => {
    // console.log(isActive);
    return (
        <div>
            <div className="w-11/12 mx-auto flex justify-between mb-8">
                <div
                    className={
                        // hidden when selected is active
                        `${isActive.available ? "" : "hidden"}`
                    }
                >
                    <h1 className="text-xl font-semibold">Available Players</h1>
                </div>

                <div
                    className={`${
                        // hiidden when available is active
                        isActive.available ? "hidden" : ""
                    }`}
                >
                    <h1 className="text-xl font-semibold">
                        Selected Players ({selectedPlayers.length}/6)
                    </h1>
                </div>

                {/* Buttons */}
                <div>
                    <button
                        onClick={() => handleIsActiveState("available")}
                        className={`${
                            isActive.available
                                ? "bg-primary font-semibold text-base p-3 px-7 border rounded-l-xl"
                                : "text-zinc-500 text-base p-3 px-7 border rounded-l-xl"
                        }`}
                    >
                        Available
                    </button>
                    <button
                        onClick={() => handleIsActiveState("selected")}
                        className={`${
                            isActive.available
                                ? "text-zinc-500 text-base p-3 px-7 border rounded-r-xl"
                                : "bg-primary font-semibold text-base p-3 px-7 border rounded-r-xl"
                        }`}
                    >
                        Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>

            {isActive.available ? (
                <Allplayers
                    handleSelectedPlayers={handleSelectedPlayers}
                ></Allplayers>
            ) : (
                <Selected
                    isActive={isActive}
                    selectedPlayers={selectedPlayers}
                    handleRemovePlayer={handleRemovePlayer}
                ></Selected>
            )}
        </div>
    );
};

PlayerContainer.propTypes = {
    handleIsActiveState: PropTypes.func.isRequired,
    isActive: PropTypes.shape({
        available: PropTypes.bool.isRequired,
        selected: PropTypes.bool.isRequired,
    }).isRequired,
    handleSelectedPlayers: PropTypes.func.isRequired,
    handleRemovePlayer: PropTypes.func.isRequired,
    selectedPlayers: PropTypes.array.isRequired,
};

export default PlayerContainer;
