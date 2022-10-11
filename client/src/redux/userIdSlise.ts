import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userInterface } from "../interface/userIdInterface";
import { RootState } from "./store";

const initialState: userInterface = {
  _id: "",
  profilRasmi: "",
  ism: "",
  familiya: "",
  email: "",
  createdAt:"",
};

// login bolgan user id {type : string}  saqlovchi slise
const userIdSlise = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<userInterface>) => {
      console.log(action.payload);
      // login bolgan user id redux ga qoyib qoysh
      state._id = action.payload._id;
      state.profilRasmi = action.payload.profilRasmi;
      state.ism = action.payload.ism;
      state.familiya = action.payload.familiya;
      state.email = action.payload.email;
      state.createdAt=action.payload.createdAt;
    },
  },
});

export const { setUserId } = userIdSlise.actions;
export const user = (state: RootState) => state;
export default userIdSlise.reducer;
