import {createSlice} from "@reduxjs/toolkit";

export const asideSlice = createSlice({
    name: 'aside',
    initialState: {
        value: false
    },
    reducers: {
        toggleAsideAction: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {toggleAsideAction} = asideSlice.actions
export const getAsideState = (store) => store.aside.value

export default asideSlice.reducer