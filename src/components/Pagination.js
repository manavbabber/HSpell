import React from 'react';
import Aux from '../hoc/Aux.js';
export const Pagination = ({postsPerPage,totalPosts,paginate}) => {
    const pageNumbers = [];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage)-7;i++){
        if(i<=9)
        pageNumbers.push('0'+i);
        else 
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul class='flex justify-center mt-9 mb-10'>
                {pageNumbers.map(number => (
                    <li key={number} class="mr-2 border-2 p-1 rounded-md border-gray-700">
                        <a onClick={()=> paginate(number)} href="#" class="">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>           
        </nav>
    )
}
