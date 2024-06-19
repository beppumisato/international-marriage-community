import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { main } from '../route';

const prisma = new PrismaClient();

//コメント詳細記事取得API
export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const id: number = parseInt(req.url.split('/comment/')[1]);
    await main();
    const post = await prisma.comment.findFirst({ where: { id } });
    return NextResponse.json({ message: 'Success', post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

//コメント記事編集用API
export const PUT = async (req: NextRequest, res: NextResponse) => {
  try {
    const id: number = parseInt(req.url.split('/comment/')[1]);

    const { description } = await req.json();

    await main();
    const post = await prisma.comment.update({
      data: { description },
      where: { id },
    });
    return NextResponse.json({ message: 'Success', post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

//コメント削除用API
export const DELETE = async (req: NextRequest, res: NextResponse) => {
  try {
    const id: number = parseInt(req.url.split('/comment/')[1]);

    await main();
    const post = await prisma.comment.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Success', post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
