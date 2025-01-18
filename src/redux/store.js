import { configureStore } from "@reduxjs/toolkit";
import LikeDisLikeReducer from '../redux/features/LikeDisLike/LikeDisikeSlice'


const store = configureStore({
    reducer: {
        LikeDislikes: LikeDisLikeReducer
    }
})


export default store;
