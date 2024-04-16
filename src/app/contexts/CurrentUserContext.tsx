'use client';

import { User } from '@prisma/client';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

export const CurrentUserContext = createContext<{
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
}>({
  currentUser: null,
  setCurrentUser: () => {},
});

type Props = Required<{
  children: ReactNode;
}>;

export default function CurrentUserProvider(props: Props) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser: user,
        setCurrentUser: setUser,
      }}
    >
      {props.children}
    </CurrentUserContext.Provider>
  );
}
