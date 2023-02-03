import { useRouter } from 'next/router';
import prisma from '@/prisma/prismaClient';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const article = await prisma.articles.findUnique({
    where: {
      id: id
    }
  });
  return {
    props: {
      article: JSON.parse(
        JSON.stringify(
          article,
          (key, value) => (typeof value === 'bigint' ? value.toString() : value) // return everything else unchanged
        )
      )
    }
  };
}

export default function Article(props) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>{id}</h1>
      {props.article.title}
    </>
  );
}
