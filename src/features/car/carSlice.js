import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cars: ["Model S", "Model 3", "Model X", "Model Y"],
  sections: ["Existing Inventory", "Used Inventory", "Trade-in", "Roadaster"],
};
const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});
export const selectCars = (state) => state.car.cars;
export const selectSections = (state) => state.car.sections;

export default carSlice.reducer;
