module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        sizeSmall: '8px',
        sizeMedium: '16px',
        sizeLarge: '24px',
        sizeXl: '32px',
        sizeXxl: '40px',
        sizeDoubleXl: '64px',
        '20': '20rem',
        '22': '22rem',
      },
      fontSize: {
        '20': '2rem',
        '26': '2.6rem'
      },
      width: {
        screenWidthLarge: '128rem',
        screenWidthMedium: '110rem',
        screenWidthLargeCard: '118rem',
        cardWidthDesktop: '20rem'
      },
      height: {
        bannerHeightDesktop: '40rem',
        cardHeightDesktop: '22rem'
      },
      colors: {
        white: '#ffffff',
        darkBlue: '#1A1A2E',
        lightBlue: '#2196f3'
      }
    },
  },
  plugins: [],
};