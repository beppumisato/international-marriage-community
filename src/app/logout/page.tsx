'use client';

import { useEffect } from 'react';
import { Cognito } from '../../../utils/cognito';
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    alert('ログアウトします...');
    const cognito = new Cognito();
    cognito.signOut();
    router.push('/');
  }, []);

  return <></>;
}
