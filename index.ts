import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const post= await prisma.post.create({
        data: {
            isbn: '9784103396529',
            title: '計算する生命',
            url: 'https://www.shinchosha.co.jp/book/339652/',
            purchasedDate: '購入日2022年05月12日',
            // purchasedAt: new Date('2022-05-12T18:35:00')
        }
    });
    console.log(post);
}

async function get() {
    const posts = await prisma.post.findMany();
    console.log(posts);
}
main();
// get()