import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name:"GPT Search",
    initialState: {
        isShowSearchGpt: true,
    },
    reducers: {
        setShowGptSearch:(state, action) => {
            state.isShowSearchGpt = !state.isShowSearchGpt
        }
    }    

})

export const  { setShowGptSearch } = searchSlice.actions;
export default searchSlice.reducer

