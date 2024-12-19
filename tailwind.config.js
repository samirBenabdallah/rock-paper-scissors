/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        principle : ['Barlow Semi Condensed', 'serif']
      },
      colors: {
        Scissors: {
          first: "hsl(39, 89%, 49%)",
          last: "hsl(40, 84%, 53%)",
        },
        Paper: {
          first: "hsl(230, 89%, 62%)",
          last: "hsl(230, 89%, 65%)",
        },
        Rock: {
          first: "hsl(349, 71%, 52%)",
          last: "hsl(349, 70%, 56%)",
        },
        Lizard: {
          first: "hsl(261, 73%, 60%)",
          last: "hsl(261, 72%, 63%)",
        },
        Spock: {
          first: "hsl(189, 59%, 53%)",
          last: "hsl(189, 58%, 57%)",
        },
        "Dark-Text": "hsl(229, 25%, 31%)",
        "Score-Text": "hsl(229, 64%, 46%)",
        "Header-Outline": "hsl(217, 16%, 45%)",
        background: {
          first: "hsl(214, 47%, 23%)",
          last: "hsl(237, 49%, 15%)",
        },
      },
    },
  },
  plugins: [],
};
