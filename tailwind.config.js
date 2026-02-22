/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx,jsx}',
    './app/**/*.{js,ts,tsx,jsx}', // include Expo Router "app" dir
    './components/**/*.{js,ts,tsx,jsx}',
    './screens/**/*.{js,ts,tsx,jsx}', // optional
    './src/**/*.{js,ts,tsx,jsx}', // optional
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
