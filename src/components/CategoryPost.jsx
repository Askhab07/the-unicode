import React from 'react';

const CategoryPost = ({ post, className }) => {
  return (
    <li className={`flex ${className}`}>
      <img
        className="w-[495px] h-[330px] rounded-2xl"
        src={post.image}
        alt=""
      />
      <div>
        <h2 className="text-4xl font-bold">{post.title}</h2>
        <p className="text-xl">{post.text}</p>
      </div>
    </li>
  );
};

export default CategoryPost;
