import React, { useMemo } from 'react';
import useToggleText from '../hooks/useToggleText';

const AsideRecommendation = ({ posts }) => {

  const randomIndex = useMemo(() => Math.floor(Math.random() * posts.length), [posts]);
  const { isExpanded, toggle } = useToggleText();
  

  return (
    <div className="w-[495px] flex flex-col items-center mt-5">
      <h2 className="w-330px font-bold text-[40px] mb-8">
        Рекомендуем к прочтению
      </h2>
      <div>
        {posts.slice(randomIndex - 2, randomIndex).map((post) => (
          <div
            key={post._id}
            className="border-b-[1px] border-black pb-12 mb-12"
          >
            <img
              className="w-[495px] h-[330px] rounded-2xl object-cover mb-[15px] object-left-top"
              src={post.image}
              alt=""
            />
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className='text-lg'>{isExpanded(post._id) ? post.text : `${post.text.slice(0, 180)} ...`}</p>
            <button className='text-[#001AFF] text-lg' onClick={() => toggle(post._id)}>{isExpanded(post._id) ? 'свернуть' : 'читать далее'}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AsideRecommendation;
