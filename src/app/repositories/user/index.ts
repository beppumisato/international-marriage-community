import { Cognito } from '../../../../utils/cognito';

export const fetchUserData = async () => {
  const cognito = new Cognito();
  const session = await cognito.getSession();
  if (!session) {
    throw new Error();
  }

  const response = await fetch(`http://localhost:3000/api/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: session.getAccessToken().getJwtToken(),
    },
  });

  const data = await response.json();
  return data.user;
};
