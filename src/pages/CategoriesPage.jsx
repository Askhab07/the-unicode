import { useDispatch, useSelector } from 'react-redux';
import CategoryPost from '../components/CategoryPost';
import { useParams } from 'react-router';
import { fetchPosts } from '../store/postsAction';
import { useEffect } from 'react';
import AsideRecommendation from '../layouts/AsideRecommendation';
import FooterRecommendation from '../layouts/FooterRecommendation';

const CategoriesPage = () => {
  const { id } = useParams();
  const posts = useSelector((state) => state.posts.posts);
  const category = useSelector((state) => state.category.category);
  
  const categoryPosts = posts.filter((category) => category.categoryId === id);
  const categoryTitle = category.filter((category) => category._id === id);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className='w-[1535px] flex flex-col items-center pb-14'>
      <div className='w-[1400px]  flex justify-between'>
        <div className='flex flex-col items-center'>
          <h2 className="font-bold text-6xl mt-10">{categoryTitle[0]?.title}</h2>
          {categoryPosts.map((post) => (
            <CategoryPost key={post._id} post={post} className='w-[796px] min-h-[330px]' />
          ))}
        </div>
        <AsideRecommendation posts={posts} />
      </div>
        <FooterRecommendation posts={posts} />
    </div>
  );
};

export default CategoriesPage;
