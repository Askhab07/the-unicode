import React from 'react';

const CategoryPost = ({ post, className }) => {
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
        <p className="text-lg">{post.text.slice(0, 150)}</p>
        <button className="text-[#001AFF] text-xl">читать далее</button>
      </div>
    </div>
  );
};

export default CategoryPost;
