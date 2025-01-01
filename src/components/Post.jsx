const Post = ({ className, posts, slice }) => {
  return (
    <div
      className={`${className}`}
      style={{
        backgroundImage: `url(${posts?.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='bg-black/60 rounded-xl p-2'>
        <h2 className="text-xl font-bold text-white">
          {posts?.title}
        </h2>
        <p className="text-lg text-white">
          {posts?.text.slice(0, Number(slice))}.......
        </p>
      </div>
    </div>
  );
};

export default Post;
