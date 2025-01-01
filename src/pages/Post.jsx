import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchPostsId } from '../store/postsAction';

const Post = () => {
  const { id } = useParams();
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchPostsId(id));
    }
  }, [dispatch, id]);

  if (!posts || posts.length === 0) {
    return <div>Loading...</div>;
  }

  const post = posts[0];

  return (
    <div className="w-[1400px] flex flex-col items-center pt-16">
      <img
        className="w-[1200px] h-[800px] rounded-2xl object-contain border-2 border-black/30"
        src={post.image}
        alt=""
      />
      <div className="w-[1360px] mt-5">
        <h2 className="font-bold text-6xl text-center">{post.title}</h2>
        <p className="w-[1360px] text-4xl mt-9">{post.text}</p>
      </div>
    </div>
  );
};

export default Post;
