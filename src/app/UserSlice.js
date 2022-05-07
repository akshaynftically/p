import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
            localStorage.setItem('auth', JSON.stringify(state.user))

            // On login/change user event
            document.dispatchEvent(new CustomEvent('login', { detail: state.user }));
        },
        logOut: (state) => {
            if (!localStorage.getItem('auth')) return

            // On logout user event
            document.dispatchEvent(new CustomEvent('logout', { detail: JSON.parse(localStorage.getItem('auth')) }));

            state.user = null
            localStorage.removeItem('auth')
        }
    }
})

export const {login, logOut} = userSlice.actions
export const getUser = (store) => {
    return localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : null
}

export default userSlice.reducer