import { NextResponse } from 'next/server';
import { main } from '../route';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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

    await main();
    const user = await prisma.user.update({
      data: {
        headerImageUrl,
        iconImageUrl,
        nickname,
        myNationality,
        partnerNationality,
        introduction,
      },
      where: { id },
    });
    return NextResponse.json({ message: 'Success', user }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
