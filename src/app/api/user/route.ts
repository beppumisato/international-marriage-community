import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { getCurrentUser, getSub } from '../common';

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
    const sub = getSub();
    if (!sub) {
      return NextResponse.json(
        { message: 'Invalid authorization' },
        { status: 401 },
      );
    }

    await main();

    const existUser = await getCurrentUser();

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

//プロフィール編集用API
export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const {
      headerImageUrl,
      iconImageUrl,
      nickname,
      myNationality,
      partnerNationality,
      introduction,
    } = await req.json();

    const data = {
      headerImageUrl: headerImageUrl,
      iconImageUrl: iconImageUrl,
      nickname: nickname,
      myNationality: myNationality,
      partnerNationality: partnerNationality,
      introduction: introduction,
    };
    for (let k in data) {
      if (data[k] === '') {
        delete data[k];
      }
    }
    await main();

    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.json({ message: 'Not Found' }, { status: 404 });
    }

    const user = await prisma.user.update({
      data: data,
      where: { id: currentUser.id },
    });

    return NextResponse.json({ message: 'Success', user }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
