import { PrismaClient } from "@prisma/client";

import data from "./questions.json" assert { type: "json" };

const prisma = new PrismaClient();

async function dumpQuestions() {
  data.questions.forEach(async (question) => {
    await prisma.question.upsert({
      where: {
        slug: question.slug,
      },
      update: {
        slug: question.slug,
        question: question.question,
        userId: 1,
      },
      create: {
        slug: question.slug,
        question: question.question,
        userId: 1,
      },
    });
  });
  await prisma.question.create;
}

dumpQuestions()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
