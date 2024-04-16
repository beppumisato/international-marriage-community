import { PrismaClient } from '@prisma/client';
import { jwtDecode } from 'jwt-decode';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function main() {
  try {
    await prisma.$connect();
  } catch (err) {
    console.log('エラー :', err);
    return Error('DB接続に失敗しました');
  }
}

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const headersList = headers();
    const authorization = headersList.get('authorization');
    const decoded = jwtDecode(authorization ?? '');
    const sub = decoded.sub;

    if (!sub) {
      return NextResponse.json(
        { message: 'Invalid authorization' },
        { status: 401 },
      );
    }

    await main();

    const existUser = await prisma.user.findFirst({
      where: { cognitoSub: sub },
    });

    if (existUser) {
      return NextResponse.json(
        { message: 'Success', user: existUser },
        { status: 200 },
      );
    } else {
      const user = await prisma.user.create({
        data: {
          nickname: 'デフォルト',
          cognitoSub: sub,
        },
      });
      return NextResponse.json(
        { message: 'Success', user: user },
        { status: 201 },
      );
    }
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
