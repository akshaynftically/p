import { configureStore } from '@reduxjs/toolkit'
import annotsReducer from './AnnotsSlice'
import asideReducer from './AsideSlice'
import transactionFormReducer from './TransactionFormSlice'
import userReducer from './UserSlice'

export default configureStore({
    reducer: {
        annots: annotsReducer,
        aside: asideReducer,
        transactionForm: transactionFormReducer,
        user: userReducer
    }
})