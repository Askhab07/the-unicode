import { BASE_URL } from './url';

export const getPostsRoute = () => `${BASE_URL}/posts`
export const getCategoryRoute = () => `${BASE_URL}/categories`
export const getPostsCategoryIdRoute = (id) => `${BASE_URL}/posts/category/${id}`
export const getPostsIdRoute = (id) => `${BASE_URL}/posts/${id}`