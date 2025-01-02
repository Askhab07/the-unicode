const CardPost = ({ className, posts, slice }) => {
  return (
    <div className={`${className} relative`}>
      <img
        className="w-full h-full rounded-2xl brightness-50 object-cover object-left-top"
        src={posts?.image}
        alt=""
      />
      <div className="absolute p-10">
        <h2 className="text-xl font-bold text-white">{posts?.title}</h2>
        <p className="text-lg text-white">
          {posts?.text.slice(0, Number(slice))} ...
        </p>
      </div>
    </div>
  );
};

export default CardPost;
