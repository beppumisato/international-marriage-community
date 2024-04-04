import { NextResponse } from 'next/server';
import { main } from '../route';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//プロフィールのID指定取得(詳細)API
export const GET = async (req: Request, res: NextResponse) => {
  try {
    const id: number = parseInt(req.url.split('/user/')[1]);
    await main();
    const user = await prisma.user.findFirst({ where: { id } });
    return NextResponse.json({ message: 'Success', user }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

//プロフィール編集用API
export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const id: number = parseInt(req.url.split('/user/')[1]);

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
    const user = await prisma.user.update({
      data: data,
      where: { id },
    });
    return NextResponse.json({ message: 'Success', user }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
