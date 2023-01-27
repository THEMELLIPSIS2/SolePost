import { useRouter } from 'next/router';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function Article(props) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>{id}</h1>
    </>
  );
}

export async function getServerSideProps(context) {
  return { props: {} };
}
