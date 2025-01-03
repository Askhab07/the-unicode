import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchPostsId } from '../store/postsAction';
import IsLoading from '../components/IsLoading';

const PostPage = () => {
  const { id } = useParams();
  const [currentPost, setCurrentPost] = useState(null);
  const pending = useSelector((state) => state.posts.pending);
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchPostsId(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (posts.length > 0) {
      const foundPost = posts.find((post) => post._id === id);
      setCurrentPost(foundPost || null);
    }
  }, [posts, id]);
  
  if (pending || !currentPost) {
    return <IsLoading />
  }

  return (
    <div className="w-[1400px] flex flex-col items-center py-16">
      <img
        className="w-[1200px] rounded-2xl object-contain border-2 border-black/30"
        src={currentPost?.image}
        alt=""
      />
      <div className="w-[1360px] mt-5">
        <h2 className="font-bold text-6xl text-center">{currentPost?.title}</h2>
        <p className="w-[1360px] text-4xl mt-9">{currentPost?.text}</p>
      </div>
    </div>
  );
};

export default PostPage;
