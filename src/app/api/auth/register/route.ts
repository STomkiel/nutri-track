import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { db } from '../../../../db';
import { Prisma } from '@prisma/client';
import { authSchema } from '@/schemas/auth';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const parse = authSchema.safeParse(data);
    if (!parse.success) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 },
      );
    }
    const { email, password } = parse.data;
    const hashedPassword = await hash(password, 10);
    await db.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    console.error({ error });
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return NextResponse.json(
          { error: 'Email already taken' },
          { status: 409 },
        );
      }
    }
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }

  return NextResponse.json({ message: 'success' });
}
