import { apiHeaders } from '../../../../utils/api';

export const postComment = async (description: string | undefined) => {
  const res = await fetch(`http://localhost:3000/api/blog/${blogId}/comment`, {
    method: 'POST',
    headers: await apiHeaders(),
    body: JSON.stringify({
      description: description,
    }),
  });

  return res.json();
};

export const editComment = async (
  description: string | undefined,
  authorId: number,
  postId: number,
) => {
  const res = await fetch(
    `http://localhost:3000/api/blog/${blogId}/comment/${commentId}`,
    {
      method: 'PUT',
      headers: await apiHeaders(),
      body: JSON.stringify({
        description: description,
        authorId: authorId,
        postId: postId,
      }),
    },
  );

  return res.json();
};

export const fetchAllComments = async (
  description: string | undefined,
  authorId: number,
  postId: number,
) => {
  const res = await fetch(
    `http://localhost:3000/api/blog/${blogId}/comment/${commentId}`,
    {
      method: 'GET',
      headers: await apiHeaders(),
      body: JSON.stringify({
        description: description,
        authorId: authorId,
        postId: postId,
      }),
    },
  );

  return res.json();
};

export const getCommentById = async (postId: number) => {
  const res = await fetch(
    `http://localhost:3000/api/blog/${blogId}/comment/${commentId}`,
  );
  const data = await res.json();
  return data.comments;
};

export const deleteComment = async (postId: number) => {
  const res = await fetch(
    `http://localhost:3000/api/blog/${blogId}/comment/${commentId}`,
    {
      method: 'DELETE',
      headers: await apiHeaders(),
    },
  );

  return res.json();
};
