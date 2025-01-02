import { Navigate, Route, Routes } from 'react-router';
import './App.css';
import Header from './layouts/Header';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import PostPage from './pages/PostPage';

function App() {

  return (
    <div className="w-[1600px] flex flex-col items-center font-['Open_Sans']">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories/:id" element={<CategoriesPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="*" element={<Navigate to={'/'} replace />} />
      </Routes>
    </div>
  );
}

export default App;

// Еднпоиты для данных:
// 1. Получение постов по id категории: https://zelim-blog.onrender.com/posts/category/:id
// 2. Получение постов: https://zelim-blog.onrender.com/posts
// 3. Получение категорий: https://zelim-blog.onrender.com/categories
// 4. Получение поста по id: https://zelim-blog.onrender.com/posts/:id
