'use client';

import { User } from '@prisma/client';
import { usePathname, useRouter } from 'next/navigation';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';
import { Cognito } from '../../../utils/cognito';
import { fetchUserData } from '../repositories/user';

export const CurrentUserContext = createContext<{
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}>({
  user: null,
  setUser: () => {},
});

type Props = Required<{
  children: ReactNode;
}>;

export default function CurrentUserProvider(props: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const cognito = new Cognito();
    cognito.getSession().then((session) => {
      // 未ログインの場合
      if (!session) {
        // 特定のページ以外はログインページへ
        if (
          ![
            '/',
            '/login',
            '/registration',
            '/registration/confirmation',
            '/timeline',
            '/logout',
          ].includes(pathname)
        ) {
          router.push('/login');
        }
      } else {
        // ログイン済みでログイン、新規登録ページを開いた場合はマイページへ
        if (
          ['/login', '/registration', '/registration/confirmation'].includes(
            pathname,
          )
        ) {
          return router.push('/mypage');
        }

        // ログイン済みでユーザーがない場合は取得する
        if (!user) {
          fetchUserData().then((user) => {
            if (user) setUser(user);
          });
        }
      }
    });
  }, [pathname]);

  return (
    <CurrentUserContext.Provider
      value={{
        user: user,
        setUser: setUser,
      }}
    >
      {props.children}
    </CurrentUserContext.Provider>
  );
}
