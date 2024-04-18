import { Cognito } from '../cognito';

export const apiHeaders = async () => {
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
