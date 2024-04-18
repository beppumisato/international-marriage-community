import { apiHeaders } from '../../../../utils/api';

const url = 'http://localhost:3000/api/user';

export const fetchUserData = async () => {
  const response = await fetch(`${url}`, {
    method: 'GET',
    headers: await apiHeaders(),
  });

  const data = await response.json();
  return data.user;
};

export const putUser = async (
  headerImageUrl: string,
  iconImageUrl: string,
  nickname: string,
  myNationality: string,
  partnerNationality: string,
  introduction: string,
) => {
  const response = await fetch(`${url}`, {
    method: 'PUT',
    headers: await apiHeaders(),
    body: JSON.stringify({
      headerImageUrl,
      iconImageUrl,
      nickname,
      myNationality,
      partnerNationality,
      introduction,
    }),
  });
  const data = await response.json();
  return data.user;
};
