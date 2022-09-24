import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userIdInterface } from "../interface/userIdInterface";
import { RootState } from "./store";

const initialState: userIdInterface = { id: '' }

// login bolgan user id {type : string}  saqlovchi slise
const userIdSlise = createSlice({
    name: 'userId',
    initialState,
    reducers: {
        setUserId: (state, action: PayloadAction<string>) => {
            // login bolgan user id redux ga qoyib qoysh
            state.id = action.payload
        }
    }
})

export const { setUserId } = userIdSlise.actions
export const userId = (state: RootState) => state.userId;
export default userIdSlise.reducer





