import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool,
  CognitoUserSession,
} from 'amazon-cognito-identity-js';

export class Cognito {
  private userPool: CognitoUserPool;

  constructor() {
    this.userPool = new CognitoUserPool({
      UserPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID!,
      ClientId: process.env.NEXT_PUBLIC_CLIENT_ID!,
    });
  }

  /**
   * ログイン済みで有効なセッションがある場合のみセッションを返す（それ以外はnull）
   * @returns CognitoUserSession | null
   */
  public getSession = async (): Promise<CognitoUserSession | null> => {
    const cognitoUser = this.getCurrentUser();
    if (!cognitoUser) return null;

    return new Promise((resolve) => {
      cognitoUser.getSession(
        (err: Error | null, session: null | CognitoUserSession) => {
          if (err) {
            resolve(null);
          } else {
            if (session != null && session.isValid()) {
              resolve(session);
            } else {
              resolve(null);
            }
          }
        },
      );
    });
  };

  public resendVerifyCode = async (email: string) => {
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: this.userPool,
    });

    return await new Promise((resolve, reject) => {
      cognitoUser.resendConfirmationCode((err, result) => {
        if (err) {
          reject(err);
        }
        resolve('ok');
      });
    });
  };

  public signIn = async (email: string, password: string) => {
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: this.userPool,
    });

    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    return await new Promise((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess(session, userConfirmationNecessary) {
          resolve(session);
        },
        onFailure(err) {
          reject(err);
        },
      });
    });
  };

  public signOut = () => {
    const cognitoUser = this.getCurrentUser();
    if (cognitoUser) {
      cognitoUser.signOut();
    }
  };

  public signUp = async (email: string, password: string) => {
    const attributeList: CognitoUserAttribute[] = [
      new CognitoUserAttribute({
        Name: 'email',
        Value: email,
      }),
    ];

    return await new Promise((resolve, reject) => {
      this.userPool.signUp(
        email,
        password,
        attributeList,
        [],
        (err, result) => {
          if (err) reject(err);

          resolve(result);
        },
      );
    });
  };

  public verifyAccount = async (email: string, code: string) => {
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: this.userPool,
    });

    return await new Promise((resolve, reject) => {
      cognitoUser.confirmRegistration(code, true, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve('ok');
      });
    });
  };

  private getCurrentUser = () => {
    return this.userPool.getCurrentUser();
  };
}
