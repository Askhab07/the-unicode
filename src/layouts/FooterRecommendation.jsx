import React from 'react';

const FooterRecommendation = ({posts}) => {
    return (
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-5xl mb-10'>Рекомендуем к прочтению</h2>
            <div className='w-[1535px] h-[690px] gap-y-7 flex flex-wrap justify-between'>
                {posts.map(e => (
                    <div className='relative w-[495px] h-[330px]'>
                        <img className='w-full h-full object-cover object-left-top rounded-2xl border-[1px] border-black/50 transition-all ease-in-out duration-300 hover:brightness-0 brightness-50' src={e.image} alt="" />
                        <h2 className='w-[435px] absolute top-7 left-7 font-bold text-3xl text-white'>{e.title}</h2>
                    </div>
                )).slice(0, 6)}
            </div>
        </div>
    );
};

export default FooterRecommendation;