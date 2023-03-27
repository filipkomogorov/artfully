module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        sizeSmall: '8px',
        sizeMedium: '16px',
        sizeLarge: '24px',
        sizeXl: '32px'
      },
      width: {
        screenWidthLarge: '128rem',
        screenWidthMedium: '110rem'
      },
      height: {
        bannerHeightDesktop: '40rem'
      },
      colors: {
        white: '#fafafa',
        darkBlue: '#1A1A2E',
        lightBlue: '#2196f3'
      }
    },
  },
  plugins: [],
};