import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseDisLikes, increaseLikes, resets } from '../redux/features/LikeDisLike/LikeDisikeSlice';

const LikeDisLike = () => {
    const {like, dislike} = useSelector((state)=> state.LikeDislikes);
    const dispatch = useDispatch();


    const handleIncreaseLikes=()=> {
        dispatch(increaseLikes())
    }
    const handleDisLikes =()=> {
        dispatch(increaseDisLikes())
    }

    const handleResets =()=> {
        dispatch(resets())
    }

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gray-100'>
        <div className='bg-white shadow-lg mx-auto rounded-lg max-w-md p-6 space-y-4'>
        <h1 className='mb-5 font-bold text-black'>Like DisLiker App With React Redux</h1>

        <div className='flex justify-center items-center gap-10'>
            <p className='bg-gray-200 px-8 py-2'>Likes: <span>{like}</span></p>
            <p className='bg-gray-200 px-8 py-2'>Dislike: <span>{dislike}</span></p>
        </div>
    <hr></hr>
       <div className='flex gap-5'>
       <button onClick={handleIncreaseLikes} className='bg-gray-200 px-8 py-2'>Likes</button>
        <button onClick={handleDisLikes} className='bg-gray-200 px-8 py-2'>DisLikes</button>
        <button onClick={handleResets} className='bg-gray-200 px-8 py-2'>Reset</button>
       </div>
        </div>
    </div>
  )
}

export default LikeDisLike
