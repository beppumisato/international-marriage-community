import { apiHeaders } from '../../../../utils/api';

export const postComment = async (
  description: string | undefined,
  blogId: number,
) => {
  const res = await fetch(`http://localhost:3000/api/blog/${blogId}/comment`, {
    method: 'POST',
    headers: await apiHeaders(),
    body: JSON.stringify({ description }),
  });

  return res.json();
};

export const editComment = async (
  description: string | undefined,
  blogId: number,
  commentId: number,
) => {
  const res = await fetch(
    `http://localhost:3000/api/blog/${blogId}/comment/${commentId}`,
    {
      method: 'PUT',
      headers: await apiHeaders(),
      body: JSON.stringify({ description, blogId, commentId }),
    },
  );

  return res.json();
};

export const fetchAllComments = async (blogId: number) => {
  const res = await fetch(`http://localhost:3000/api/blog/${blogId}/comment/`, {
    method: 'GET',
    cache: 'no-store', //SSR
    headers: await apiHeaders(),
  });

  const data = await res.json();
  return data.comments;
};

export const getCommentById = async (blogId: number, commentId: number) => {
  const res = await fetch(
    `http://localhost:3000/api/blog/${blogId}/comment/${commentId}`,
  );
  const data = await res.json();
  return data.comments;
};

export const deleteComment = async (blogId: number, commentId: number) => {
  const res = await fetch(
    `http://localhost:3000/api/blog/${blogId}/comment/${commentId}`,
    {
      method: 'DELETE',
      headers: await apiHeaders(),
    },
  );

  return res.json();
};
