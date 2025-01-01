import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/postsAction';
import { useEffect, useState } from 'react';
import CardPost from '../components/CardPost';
import useRandom from '../hooks/useRandom';
import { Link } from 'react-router';

const HomePage = () => {
  const randomPost = useRandom();
  const [readMore, setReadMore] = useState({});
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleReadMore = (id) => {
    setReadMore((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="w-[1600px] flex flex-col items-center mb-32">
      <div className="w-[1400px] flex justify-center border-b-2 border-black pb-10">
        <div className="w-[1200px] pt-[37px] flex justify-between">
          <Link to={`/posts/${randomPost?._id}`} >
            <CardPost
              posts={randomPost}
              className="w-[700px] h-[662px] flex flex-col justify-end rounded-2xl"
              slice="40"
            />
          </Link>
          <ul className="flex flex-col justify-between">
            {posts
              .map((e) => (
                <li key={e._id}>
                  <Link to={`/posts/${e._id}`}>
                  <CardPost
                    className={`w-[484px] h-[323px] flex flex-col justify-end rounded-2xl`}
                    posts={e}
                    slice="20"
                  />
                  </Link>
                </li>
              ))
              .slice(1, 3)}
          </ul>
        </div>
      </div>
      <div className="w-[1200px] flex flex-col items-center mt-8">
        <h1 className="text-5xl font-bold mb-12">
          Последние новости в мире IT
        </h1>
        <ul className="w-[1180px] flex justify-between">
          {posts
            .map((e) => (
              <li key={e._id} className="w-[550px]">
                <img
                  className="w-[550px] h-[367px] rounded-2xl"
                  src={e.image}
                  alt=""
                />
                <h2 className="my-3 text-xl font-bold">{e.title}</h2>
                <p>
                  {`${e.text.slice(0, readMore[e._id] ? e.text.length : 30)} ${
                    readMore[e._id] ? '' : '...'
                  }`}
                </p>
                <button
                  className="text-[#3300FF]"
                  onClick={() => handleReadMore(e._id)}
                >
                  {readMore[e._id] ? 'свернуть' : 'читать далее'}
                </button>
              </li>
            ))
            .slice(0, 2)}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
