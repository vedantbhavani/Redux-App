import counterSlice from './slices/counter'
import counterWords from './slices/worder'
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer : {
        counter : counterSlice,
        words : counterWords,
    },
})

export default store;