import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    like: 0,
    dislike: 0
}

const LikeDisLikeSlice = createSlice({
    name: 'LikeDisLike',
    initialState,
    reducers: {
        increaseLikes: (state) => {
            state.like += 1
        },
        increaseDisLikes: (state)=> {
            state.dislike +=1
        },
        resets: (state) => {
            state.like = 0;
            state.dislike = 0;
        }
    }
})

export const {increaseLikes, increaseDisLikes, resets} = LikeDisLikeSlice.actions;
export default LikeDisLikeSlice.reducer;
