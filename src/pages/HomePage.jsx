import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/postsThunk';
import { useEffect, useState } from 'react';
import Post from '../components/Post';

const HomePage = () => {
  const [readMore, setReadMore] = useState(30);
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="w-[1600px] flex flex-col items-center mb-32">
      <div className="w-[1400px] flex justify-center border-b-2 border-black pb-10">
        <div className="w-[1200px] pt-[37px] flex justify-between">
          <Post
            posts={posts[Math.floor(Math.random() * posts.length)]}
            className="w-[700px] h-[662px] flex flex-col justify-end rounded-2xl pb-12 px-12"
            slice="40"
          />
          <ul className="flex flex-col justify-between">
            {posts
              .map((e) => (
                <li key={e._id}>
                  <Post
                    className={`w-[484px] h-[323px] flex flex-col justify-end rounded-2xl pb-12 px-12`}
                    posts={e}
                    slice="20"
                  />
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
                <h2 className='my-3 text-xl font-bold'>{e.title}</h2>
                <p>{`${e.text.slice(0, readMore)} ${readMore > 30 ? '' : '.........'}`}</p>
                <button className='text-[#3300FF]' onClick={() => setReadMore(readMore <= 30 ? e.text.length : 30)}>{readMore <= 30 ? 'читать далее' : 'свернуть'}</button>
              </li>
            ))
            .slice(0, 2)}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
