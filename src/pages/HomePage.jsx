import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/postsAction';
import { useEffect, useState } from 'react';
import CardPost from '../components/CardPost';
import { Link } from 'react-router';
import IsLoading from '../components/IsLoading';
import LatestNews from '../layouts/LatestNews';

const HomePage = () => {
  const [randomIndex, setRandomIndex] = useState(null);
  const posts = useSelector((state) => state.posts.posts);
  const pending = useSelector((state) => state.posts.pending);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  
  useEffect(() => {
    if (posts.length > 0 && randomIndex === null) {
      const min = 2;
      const max = posts.length;
      const random = Math.floor(Math.random() * (max - min)) + min;
      setRandomIndex(random);
    }
  }, [posts, randomIndex]);
  

  if (pending) {
    return <IsLoading />
  }

  return (
    <div className="w-[1600px] flex flex-col items-center mb-32">
      <div className="w-[1400px] flex justify-center border-b-2 border-black pb-10">
        <div className="w-[1200px] pt-[37px] flex justify-between">
          {randomIndex !== null && posts[randomIndex] && (
            <Link to={`/posts/${posts[randomIndex]._id}`}>
              <CardPost
                posts={posts[randomIndex]}
                className="w-[700px] h-[662px] flex flex-col justify-end rounded-2xl"
                slice="40"
              />
            </Link>
          )}
          <ul className="flex flex-col justify-between">
            {posts.slice(randomIndex - 2, randomIndex).map((post) => (
              <li key={post._id}>
                <Link to={`/posts/${post._id}`}>
                  <CardPost
                    className={`w-[484px] h-[323px] flex flex-col justify-end rounded-2xl`}
                    posts={post}
                    slice="20"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <LatestNews />
    </div>
  );
};

export default HomePage;
