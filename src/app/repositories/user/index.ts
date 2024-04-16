import { Cognito } from '../../../../utils/cognito';

const url = 'http://localhost:3000/api/user';

const headers = async () => {
  const cognito = new Cognito();
  const session = await cognito.getSession();

  if (!session) {
    throw new Error();
  }

  return {
    'Content-Type': 'application/json',
    authorization: session.getAccessToken().getJwtToken(),
  };
};

export const fetchUserData = async () => {
  const response = await fetch(`${url}`, {
    method: 'GET',
    headers: await headers(),
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
    headers: await headers(),
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
