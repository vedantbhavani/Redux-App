import {createSlice} from '@reduxjs/toolkit'

const counterWords = createSlice({
    name : "counter",
    initialState: "New counter",
    reducers : {
        increment : (() => (" Increment")),
        decrement : (() => (" Decrement")),
    }
})

export const {increment , decrement} = counterWords.actions
export default counterWords.reducer;