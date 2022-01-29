module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        couponItem: "rgba(17, 17, 26, 0.1) 0px 0px 16px;",
      },
      backgroundImage: {
        clipboard: "linear-gradient(to right, #36d1dc , #5b86e5)",
        code: "linear-gradient(to right, #ff9966  , #ff5e62)",
        overlay: "rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};
