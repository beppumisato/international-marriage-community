'use client';

import { User } from '@prisma/client';
import { useEffect, useState } from 'react';

export const useUserState = () => {
  const [user, setUser] = useState<User | null>(null);

  const sessionKey = 'user';

  const getUser = () => {
    const data = sessionStorage.getItem(sessionKey);
    if (data) return JSON.parse(data);

    return null;
  };

  const saveUser = (user: User) => {
    sessionStorage.setItem(sessionKey, JSON.stringify(user));
  };

  useEffect(() => {
    const sessionUser = getUser();
    setUser(sessionUser);
  }, []);

  return {
    user,
    saveUser,
  };
};
