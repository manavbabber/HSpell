import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listPosts } from '../store/actions/prodAction';
import { Pagination } from './Pagination';
import Aux from '../hoc/Aux.js';
import { Posts } from './Posts';
export const Home = () => {
    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage,setPostsPerPage] = useState(9);
    const dispatch = useDispatch();
    const postList = useSelector((state) => state.postList);
    const { posts } = postList;
    useEffect(() => {
        dispatch(listPosts());
    }, [dispatch])

    const indexOfLastPost = currentPage*postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

    const paginate = (number) => setCurrentPage(number);

    return (
        <Aux>
            <Posts posts={currentPosts} />
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </Aux>
    )
}
