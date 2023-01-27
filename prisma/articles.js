import prisma from "../prisma/prismaClient"

export async function getServerSideProps() {
    let recents = await prisma.articles.findMany({
        where: {
            published: true,
        },
        orderBy: {
            timeStamp: 'asc'
        },
        take: 3
      })

    return JSON.parse(JSON.stringify(recents)),

}