import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

async function getRandomQuestion() {
  const prisma = new PrismaClient();

  const questionCount = await prisma.question.count();
  const skip = Math.floor(Math.random() * questionCount);

  const questions = await prisma.question.findMany({
    take: 1,
    skip: skip,
  });

  console.log(questions);

  return questions[0];
}

export const revalidate = 30;

export async function GET(request: Request, response: Response) {
  return NextResponse.json(await getRandomQuestion());
}
