// import React, { useEffect } from 'react';
import useToggleText from '../hooks/useToggleText';
import { useSelector } from 'react-redux';
// import { fetchPostsCategory } from '../store/postsAction';

const LatestNews = () => {
  const posts = useSelector((state) => state.posts.posts);
//   const dispatch = useDispatch();
  const { isExpanded, toggle } = useToggleText();

//   useEffect(() => {
//       dispatch(fetchPostsCategory('63dfea8be3ff10b4c4e0ae3f'));
//     }, [dispatch]);


  return (
    <div className="w-[1200px] flex flex-col items-center mt-8">
      <h1 className="text-5xl font-bold mb-12">Последние новости в мире IT</h1>
      <ul className="w-[1180px] flex justify-between">
        {posts.slice(0, 2).map((post) => (
          <li key={post._id} className="w-[550px]">
            <img
              className="w-[550px] h-[367px] rounded-2xl object-cover object-left-top"
              src={post.image}
              alt=""
            />
            <h2 className="my-3 text-xl font-bold">{post.title}</h2>
            <p>
              {isExpanded(post._id)
                ? post.text
                : `${post.text.slice(0, 30)} ...`}
            </p>
            <button className="text-[#3300FF]" onClick={() => toggle(post._id)}>
              {isExpanded(post._id) ? 'свернуть' : 'читать далее'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestNews;
