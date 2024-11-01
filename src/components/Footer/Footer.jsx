import React from "react";

const Footer = () => {
    return (
        <div className="mt-20">
            {/* Newaletter section */}
            <div className="w-10/12 mx-auto border border-white bg-white/15 rounded-3xl p-4 relative -bottom-32 z-10">
            <div className="bg-custom-bg bg-cover bg-no-repeat bg-white py-20 text-center space-y-4 border rounded-3xl">
                <h2 className="text-3xl font-bold">
                    Subscribe to our Newsletter
                </h2>
                <p className="text-zinc-500 text-xl">
                    Get the latest updates and news right in your inbox!
                </p>

                <div className="flex gap-4 justify-center">
                    {/* input email */}
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-2/5 px-7 py-4 border rounded-xl"
                    />
                    {/* subscribe button */}
                    <button className="bg-gradient-to-r from-pink-400 to-yellow-200 px-7 py-4 rounded-xl font-bold">
                        Subscribe
                    </button>
                </div>
            </div>
            </div>

            {/* Footer section */}
            <div className="w-full bg-black pt-10 absolute">
                <img
                    className="mx-auto mt-32"
                    src="https://i.ibb.co.com/wdVr9WV/logo-footer.png"
                    alt=""
                />

                <div className="w-10/12 mx-auto flex gap-36 text-white py-16">
                    <div className="flex-1">
                        <h4 className="text-base">About Us</h4>
                        <p className="text-zinc-400">
                            We are a team of professionals who are dedicated to
                            providing you with the best services.
                        </p>
                    </div>

                    <div className="flex-1">
                        <h4 className="text-base">Quick Links</h4>
                        <ul className="space-y-2 start-0">
                            <li>Home</li>
                            <li>Services</li>
                            <li>Projects</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className="flex-2 space-y-4">
                        <h4 className="text-base">Subscribe</h4>
                        <p className="text-zinc-400">
                            Subscribe to our newsletter to get the latest
                            updates and news.
                        </p>
                        <div className="flex justify-center text-sm">
                            {/* input email */}
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-7 py-3 border rounded-l-xl"
                            />
                            {/* subscribe button */}
                            <button className="bg-gradient-to-r from-pink-400 to-yellow-200 px-7 py-3 rounded-r-xl font-bold text-black">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <hr />

                <p className="text-zinc-400 text-center py-8">&copy; 2024 BPL Squad All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;
