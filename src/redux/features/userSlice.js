import { createSlice } from "@reduxjs/toolkit";

const userSLice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUsers: (state, action) => {
            return action.payload
        },
        removeUsers: (state, action) => {
            return null
        }
    }

})

export const { addUsers, removeUsers} = userSLice.actions
export default userSLice.reducer