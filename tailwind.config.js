module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: '##E7FE29',
            },
            fontFamily: {
                sora: ['"Sora"', 'sans-serif'], 
            },
            backgroundImage: {
                'custom-pattern': "url('/src/assets/banner-main.png')",
            },
        },
    },
    plugins: [],
};
