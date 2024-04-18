import { PrismaClient } from '@prisma/client';
import { jwtDecode } from 'jwt-decode';
import { headers } from 'next/headers';

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
  } catch (err) {
    console.log('エラー :', err);
    return Error('DB接続に失敗しました');
  }
}

export const getCurrentUser = async () => {
  const sub = getSub();

  await main();
  return prisma.user.findFirst({
    where: { cognitoSub: sub },
  });
};

export const getSub = () => {
  const headersList = headers();
  const authorization = headersList.get('authorization');
  const decoded = jwtDecode(authorization ?? '');
  return decoded.sub;
};
