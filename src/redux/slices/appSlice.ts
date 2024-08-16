import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  selectedOption: string;
  discountCode: string;
  note: string;
}

const initialState: AppState = {
  selectedOption: "",
  discountCode: "",
  note: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSelectedOption(state, action: PayloadAction<string>) {
      state.selectedOption = action.payload;
    },
    setDiscountCode(state, action: PayloadAction<string>) {
      state.discountCode = action.payload;
    },
    setNote(state, action: PayloadAction<string>) {
      state.note = action.payload;
    },
  },
});

export const { setSelectedOption, setDiscountCode, setNote } = appSlice.actions;
export default appSlice.reducer;
