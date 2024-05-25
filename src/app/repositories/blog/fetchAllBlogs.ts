import { apiHeaders } from '../../../../utils/api';

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
