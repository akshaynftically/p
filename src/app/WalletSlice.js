import {createSlice} from "@reduxjs/toolkit";

export const walletSlice = createSlice({
    name: 'wallet',
    initialState: {
        wallet: null
    },
    reducers: {
        setWallet: (state, action) => {
            state.wallet = action.payload
            localStorage.setItem('wallet', JSON.stringify(state.wallet))

            // On set/change wallet event
            document.dispatchEvent(new CustomEvent('set-wallet', { detail: state.wallet }));
        },
        removeWallet: (state) => {
            if (!localStorage.getItem('wallet')) return

            // On remove wallet event
            document.dispatchEvent(new CustomEvent('remove-wallet', { detail: JSON.parse(localStorage.getItem('wallet')) }));

            state.wallet = null
            localStorage.removeItem('wallet')
        }
    }
})

export const {setWallet, removeWallet} = walletSlice.actions
export const getWallet = (store) => {
    return localStorage.getItem('wallet') ? JSON.parse(localStorage.getItem('wallet')) : null
}

export default walletSlice.reducer