/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'customPrimary': "rgb(97, 77, 226)",
        'customSecondary': 'rgb(158, 145, 237)',
        'customDarkBg1': "rgb(31, 32, 35)",
        'customDarkBg2': "rgb(38, 39, 43)",
        'customDarkBg3': "rgb(48, 49, 54)",
        'customDarkBg3Hover': "rgb(55, 56, 62)",
        'customContentSubtitle': 'rgb(178, 184, 205)',
        'customGrayBorder': 'rgb(255,255,255,0.1)',
        'customGrayText': 'rgb(174, 178, 183)'
      },
      fontFamily: {
        'Inter': 'Inter',
        'Poppins': 'Poppins',
        'Roboto': 'Roboto'	
      }
    }
	  },
  plugins: [],
  darkMode: "class",
};
// 'customDarkBg1': "rgb(31, 32, 35)",
// 'customDarkBg2': "rgb(38, 39, 43)",
// 'customDarkBg3': "rgb(48, 49, 54)",