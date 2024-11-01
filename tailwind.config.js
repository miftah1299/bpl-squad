export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#E7FE29",
            },
            fontFamily: {
                sora: ['"Sora"', "sans-serif"],
            },
            backgroundImage: {
                "custom-bg": "url('/src/assets/bg-shadow.png')",
            },
        },
    },
    plugins: [],
};
