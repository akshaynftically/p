import { configureStore } from "@reduxjs/toolkit";
import annotsReducer from "./AnnotsSlice";
import asideReducer from "./AsideSlice";

export default configureStore({
    reducer: {
        annots: annotsReducer,
        aside: asideReducer
    }
})