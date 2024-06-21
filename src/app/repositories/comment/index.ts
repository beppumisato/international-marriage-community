import { apiHeaders } from '../../../../utils/api';

export const postComment = async (
  description: string | undefined,
  authorId: number,
  postId: number,
) => {
  const res = await fetch(
    `http://localhost:3000/api/blog/${authorId}/comment`,
    {
      method: 'POST',
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

export const editComment = async (
  description: string | undefined,
  authorId: number,
  postId: number,
) => {
  const res = await fetch(
    `http://localhost:3000/api/blog/${authorId}/comment/${postId}`,
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

export const fetchAllComments = async (isMyPost: boolean) => {
  const url = isMyPost;
  // ? 'http://localhost:3000/api/blog/[id]/comment/?mypost=true'
  // : 'http://localhost:3000/api/blog/[id]/comment//comment/[comment_id]';

  const res = await fetch(`${url}`, {
    method: 'GET',
    cache: 'no-store', //SSR
    headers: await apiHeaders(),
  });

  const data = await res.json();
  return data.comments;
};

export const getCommentById = async (postId: number) => {
  const res = await fetch(`http://localhost:3000/api/blog/${postId}`);
  const data = await res.json();
  return data.comments;
};

export const deleteComment = async (postId: number) => {
  const res = await fetch(`http://localhost:3000/api/blog/${postId}`, {
    method: 'DELETE',
    headers: await apiHeaders(),
  });

  return res.json();
};
