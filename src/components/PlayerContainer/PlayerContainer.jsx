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
            <div className="w-11/12 mx-auto flex justify-between mt-10 mb-10">
                <div>
                    <h1 className="text-xl font-semibold">Available Players</h1>
                </div>

                <div>
                    <button
                        onClick={() => handleIsActiveState("available")}
                        className={`${
                            isActive.available
                                ? "bg-primary text-base p-3 px-7 border rounded-l-xl"
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
                                : "bg-primary text-base p-3 px-7 border rounded-r-xl"
                        }`}
                    >
                        Selected (0)
                    </button>
                </div>
            </div>

            {isActive.available ? (
                <Allplayers
                    handleSelectedPlayers={handleSelectedPlayers}
                ></Allplayers>
            ) : (
                <Selected
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
};

export default PlayerContainer;
