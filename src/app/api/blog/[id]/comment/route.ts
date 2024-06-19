import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function main() {
  try {
    await prisma.$connect();
  } catch (err) {
    return Error('DB接続に失敗しました');
  }
}

//コメント全記事取得API
export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    await main();
    const posts = await prisma.comment.findMany();
    return NextResponse.json({ message: 'Success', posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

//コメント投稿用API
export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const { description } = await req.json();

    await main();
    const post = await prisma.comment.create({ data: { description } });
    return NextResponse.json({ message: 'Success', post }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
