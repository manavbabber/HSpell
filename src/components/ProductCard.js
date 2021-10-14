import React from 'react';
import ReadMore from './ReadMore.js';

export const PostCard = ({post}) => {
    return(
        <div class='mb-3 grid grid-cols-1'>
            {console.log(post)}
            <div class="max-w-md py-4 px-8 bg-gray-300 shadow-lg rounded-lg ">
              <div>
                <h2 class="text-gray-800 text-xl font-semibold font-serif">{post.title.slice(0.20)}</h2>
                <p class="mt-2 text-gray-600"><ReadMore>{post.body}</ReadMore></p>
              </div>
            </div>
        </div>
    )
}
