import { apiHeaders } from '../../../../utils/api';

export const postBlog = async (
  title: string | undefined,
  description: string | undefined,
) => {
  const res = await fetch(`http://localhost:3000/api/blog`, {
    method: 'POST',
    headers: await apiHeaders(),
    body: JSON.stringify({ title, description }),
  });

  return res.json();
};

export const editBlog = async (
  title: string | undefined,
  description: string | undefined,
  id: number,
) => {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
    method: 'PUT',
    headers: await apiHeaders(),
    body: JSON.stringify({ title, description, id }),
  });

  return res.json();
};

export const getBlogById = async (id: number) => {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`);
  const data = await res.json();
  return data.post;
};

export const deleteBlog = async (id: number) => {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
    method: 'DELETE',
    headers: await apiHeaders(),
  });

  return res.json();
};

// クエリパラメータで制御
export const fetchAllBlogs = async (isMyPost: boolean) => {
  const url = isMyPost
    ? 'http://localhost:3000/api/blog?mypost=true'
    : 'http://localhost:3000/api/blog';

  const res = await fetch(`${url}`, {
    method: 'GET',
    cache: 'no-store', //SSR
    headers: await apiHeaders(),
  });

  const data = await res.json();
  return data.posts;
};
