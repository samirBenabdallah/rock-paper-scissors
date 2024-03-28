import { createSlice } from "@reduxjs/toolkit";

const score = createSlice({
  initialState: {
    normal: 0,
    bonus: 0,
  },
  name: "score",
  reducers: {
    normalWin: (state) => {
      state.normal += 1;
    },
    bonusWin: (state) => {
      state.bonus += 1;
    },
  },
});
export default score.reducer;
export const { bonusWin, normalWin } = score.actions;
