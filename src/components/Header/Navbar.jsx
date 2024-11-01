const Navbar = ({ price }) => {
    return (
        <nav className="w-11/12 mx-auto p-4 text-base">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">
                    <a href="#">
                        <img
                            src="https://i.ibb.co.com/M8vwqkc/logo.png"
                            alt=""
                        />
                    </a>
                </div>
                <div className="flex space-x-12 items-center">
                    <ul className="flex space-x-12">
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className="flex items-center gap-2 border p-2 px-4 rounded-xl">
                        <span className="font-semibold">{price} Coin</span>
                        <img
                            className="w-8 h-8"
                            src="https://i.ibb.co.com/CnvGXK9/icons8-coin-48.png"
                            alt="coin"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
