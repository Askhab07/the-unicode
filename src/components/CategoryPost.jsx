import React from 'react';
import useToggleText from '../hooks/useToggleText';

const CategoryPost = ({ post, className }) => {
  const { isExpanded, toggle } = useToggleText();
  return (
    <div
      className={`flex ${className} justify-between last:border-none border-b-2 border-black pt-10 pb-11`}
    >
      <img
        className="w-[495px] h-[330px] rounded-2xl object-cover object-left-top  border-[1px] border-black/30"
        src={post.image}
        alt=""
      />
      <div className="w-[290px]">
        <h2 className="text-2xl font-bold mb-5">{post.title}</h2>
        <p className="text-lg">
          {isExpanded(post._id) ? post.text : `${post.text.slice(0, 150)} ...`}
        </p>
        <button
          className="text-[#001AFF] text-lg"
          onClick={() => toggle(post._id)}
        >
          {isExpanded(post._id) ? 'свернуть' : 'читать далее'}
        </button>
      </div>
    </div>
  );
};

export default CategoryPost;
