import { PrismaClient } from '@prisma/client';
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

//プロフィール作成用API=>新規会員登録画面で呼ぶ
export const POST = async (req: Request, res: NextResponse) => {
  try {
    const {
      headerImageUrl,
      iconImageUrl,
      nickname,
      myNationality,
      partnerNationality,
      introduction,
    } = await req.json();

    await main();
    const user = await prisma.user.create({
      data: {
        headerImageUrl,
        iconImageUrl,
        nickname,
        myNationality,
        partnerNationality,
        introduction,
      },
    });
    return NextResponse.json({ message: 'Success', user }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
