import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useRandom = () => {
  const [randomPost, setRandomPost] = useState(null);
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    if (posts.length > 0) {
      const randomIndex = Math.floor(Math.random() * posts.length);
      setRandomPost(posts[randomIndex]);
    }
  }, [posts]);

  return randomPost;
};

export default useRandom;
