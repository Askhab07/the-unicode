import { useDispatch, useSelector } from 'react-redux';
import CategoryPost from '../components/CategoryPost';
import { useParams } from 'react-router';
import { fetchPosts } from '../store/postsThunk';
import { useEffect } from 'react';

const CategoriesPage = () => {
  const { id } = useParams();
  const posts = useSelector((state) => state.posts.posts);
  const filteredPosts = posts.filter((e) => e.categoryId === id);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h2 className="font-bold text-6xl">category</h2>
        <ul>
          {filteredPosts.map((e) => (
            <CategoryPost post={e} className='w-[796px] min-h-[330px]' />
          ))}
        </ul>
      </div>

    </div>
  );
};

export default CategoriesPage;
