// import React from "react";
import PropTypes from "prop-types";

const Player = ({ player, handleSelectedPlayers }) => {
    const { name, image, country, category, rating, handedness, price } =
        player;

    return (
        <div className="bg-white border rounded-lg p-4 space-y-2">
            <img
                className="w-full h-1/2 object-cover rounded-lg"
                src={image}
                alt={name}
            />
            <h3 className="text-lg font-semibold pt-4">{name}</h3>
            <div className="flex justify-between">
                <p className="text-zinc-500">{country}</p>
                <div className="bg-zinc-200 p-2 rounded-lg text-sm">
                    {category}
                </div>
            </div>
            <hr />

            <div className="flex justify-between">
                <p className="font-semibold">Rating</p>
                <p className="text-zinc-500">{rating}</p>
            </div>

            <div className="flex justify-between">
                <p className="font-semibold">Handed</p>
                <p className="text-zinc-500">{handedness}</p>
            </div>

            <div className="flex justify-between">
                <p className="font-semibold">Price: ${price}</p>
                <div>
                    <button
                        onClick={() => handleSelectedPlayers(player)}
                        className="p-2 border rounded-lg text-sm font-medium hover:bg-primary"
                    >
                        Choose Player
                    </button>
                </div>
            </div>
        </div>
    );
};
Player.propTypes = {
    player: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        handedness: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
    handleSelectedPlayers: PropTypes.func.isRequired,
};

export default Player;
