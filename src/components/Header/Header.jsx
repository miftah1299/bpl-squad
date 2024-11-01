// import React from "react";

const Header = () => {
    return (
        <div className="w-11/12 mx-auto bg-custom-bg bg-black text-center text-white space-y-6 py-16 bg-cover bg-no-repeat rounded-xl">
            <img className="mx-auto" src="/src/assets/banner-main.png" alt="" />
            <h1 className="text-4xl font-bold">
                Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="text-lg text-zinc-300">
                Beyond Boundaries Beyond Limits
            </p>
            <div className="inline-block border border-primary rounded-xl p-2">
                <button className="bg-primary p-3 px-5 rounded-lg text-black font-semibold">
                    Claim Free Credit
                </button>
            </div>
        </div>
    );
};

export default Header;
