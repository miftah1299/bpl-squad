// import React from "react";
import PropTypes from "prop-types";

const Header = ({ claimPrice, price }) => {
    return (
        <div className="w-11/12 mx-auto bg-custom-bg bg-black text-center text-white space-y-6 py-16 bg-cover bg-no-repeat rounded-3xl mb-16">
            <img
                className="mx-auto"
                src="https://i.ibb.co.com/1TbYVZm/banner-main.png"
                alt=""
            />
            <h1 className="text-4xl font-bold">
                Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="text-lg text-zinc-300">
                Beyond Boundaries Beyond Limits
            </p>
            <div className="inline-block border border-primary rounded-xl p-2">
                <button
                    onClick={() => claimPrice(price)}
                    className="bg-primary font-bold p-3 px-5 rounded-lg text-black"
                >
                    Claim Free Credit
                </button>
            </div>
        </div>
    );
};
Header.propTypes = {
    claimPrice: PropTypes.func.isRequired,
    price: PropTypes.number.isRequired,
};

export default Header;
