import { Cognito } from '../cognito';

export const apiHeaders = async () => {
  let headers = {
    'Content-Type': 'application/json',
  };

  // ログイン中の場合は、ヘッダーに認証情報を含める
  const cognito = new Cognito();
  const session = await cognito.getSession();
  if (session) {
    return {
      ...headers,
      authorization: session.getAccessToken().getJwtToken(),
    };
  }

  return headers;
};
