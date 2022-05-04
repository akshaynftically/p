import {createSlice} from "@reduxjs/toolkit";

export const transactionFormSlice = createSlice({
    name: 'transactionForm',
    initialState: {
        value: null
    },
    reducers: {
        setTransactionForm: (state, action) => {
            state.value = action.payload
            localStorage.setItem('transaction_form', JSON.stringify(action.payload))
        },
        clearTransactionForm (state) {
            localStorage.removeItem('transaction_form')
        }
    }
})

export const {setTransactionForm, clearTransactionForm} = transactionFormSlice.actions

export const getTransactionForm = (store) => {
    if (localStorage.getItem('transaction_form')) {
        return JSON.parse(localStorage.getItem('transaction_form'))
    }
    return store.transactionForm.value
}

export default transactionFormSlice.reducer