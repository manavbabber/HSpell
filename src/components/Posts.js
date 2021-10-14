import React from 'react'
import {PostCard} from './ProductCard';
import Aux from '../hoc/Aux.js';
export const Posts = ({posts}) => {
    return (
        <Aux>
            <p class='text-6xl font-sans font-bold mt-8 mb-12'>Posts</p>             
            <div class=' flex ml-7 mr-7 grid grid-cols-3 gap-4'>
                {(posts.map(post => (
                        <PostCard post={post} />
                )))}
            </div>
        </Aux>
    )
}
