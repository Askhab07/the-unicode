import React from 'react';

const AsideRecommendation = ({ posts }) => {
  const randomIndex = Math.floor(Math.random() * posts.length);

  return (
    <div className="w-[495px] flex flex-col items-center mt-5">
      <h2 className="w-330px font-bold text-[40px] mb-8">Рекомендуем к прочтению</h2>
      <div>
        {posts
          .map((e) => (
            <div key={e._id} className='border-b-[1px] border-black pb-12 mb-12'>
              <img
                className="w-[495px] h-[330px] rounded-2xl object-cover mb-[15px]"
                src={e.image}
                alt=""
              />
              <h2 className='text-2xl font-bold mb-2'>{e.title}</h2>
              <p>{e.text}</p>
            </div>
          ))
          .slice(randomIndex - 2, randomIndex)}
      </div>
    </div>
  );
};

export default AsideRecommendation;
