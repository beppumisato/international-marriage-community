'use client';

import { User } from '@prisma/client';
import { useState } from 'react';

export const useUserState = () => {
  const [user, setUser] = useState<User | null>(null);

  return {
    user,
  };
};
