import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '../common';

const prisma = new PrismaClient();

export async function main() {
  try {
    await prisma.$connect();
  } catch (err) {
    return Error('DB接続に失敗しました');
  }
}

//ブログ前記事取得API
export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const isMyPost = searchParams.get('mypost');

    await main();

    if (isMyPost) {
      const currentUser = await getCurrentUser();

      // 自分のだけ
      const posts = await prisma.post.findMany({
        where: {
          authorId: currentUser?.id,
        },
        include: {
          author: true,
        },
      });
      return NextResponse.json({ message: 'Success', posts }, { status: 200 });
    } else {
      // 全部
      const posts = await prisma.post.findMany({
        include: {
          author: true,
        },
      });
      return NextResponse.json({ message: 'Success', posts }, { status: 200 });
    }
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

//ブログ投稿用API
export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { title, description } = await req.json();

    await main();

    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.json({ message: 'Error' }, { status: 400 });
    }
    const authorId = currentUser.id;

    const post = await prisma.post.create({
      data: { title, description, authorId },
    });
    return NextResponse.json({ message: 'Success', post }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
