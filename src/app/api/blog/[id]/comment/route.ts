import { getCurrentUser } from '@/app/api/common';
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
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } },
  res: NextResponse,
) => {
  const postId = Number(params.id);

  try {
    await main();

    const comments = await prisma.comment.findMany({
      where: {
        postId,
      },
      include: {
        author: true,
      },
    });
    return NextResponse.json({ message: 'Success', comments }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

//コメント投稿用API
export const POST = async (
  req: NextRequest,
  { params }: { params: { id: string } },
  res: NextResponse,
) => {
  const postId = Number(params.id);
  try {
    const { description } = await req.json();

    await main();
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json({ message: 'Error' }, { status: 400 });
    }
    const authorId = currentUser.id;

    const comment = await prisma.comment.create({
      data: { description: description, authorId: authorId, postId: postId },
    });
    return NextResponse.json({ message: 'Success', comment }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
