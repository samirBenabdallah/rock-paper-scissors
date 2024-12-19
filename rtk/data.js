import { createSlice } from "@reduxjs/toolkit";

const data = createSlice({
  name: "data",
  initialState: {
    gametype: "normal",
    choice: "none",
    score: {
      normal: 0,
      bonus: 0,
    },
  },

  reducers: {
    setChoice: (state, { payload = "none" }) => {
      console.log(payload);
      state.choice = payload;
    },
    toggleGameType: (state) => {
      if (state.gametype === "normal") state.gametype = "bonus";
      else state.gametype = "normal";
    },
    changeScore: (state, { payload }) => {
      if (state.gametype === "normal") {
        if (payload === "lose" && state.score.normal > 0) state.score.normal--;
        else if (payload === "win") state.score.normal++;
      } else {
        if (payload === "lose" && state.score.bonus > 0) state.score.bonus--;
        else if (payload === "win") state.score.bonus++;
      }
    },

  },
});

export default data.reducer;
export const { toggleGameType, setChoice, changeScore } = data.actions;
