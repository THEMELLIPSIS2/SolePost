import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import '@/styles/Homepage.module.css'
import shoe from '../public/shoe.svg';
import {HomePage} from '../components/Home'

import  prisma  from "@/prisma/prismaClient";


export async function getServerSideProps() {
    let recents = await prisma.articles.findMany({
        where: {
            published: true,
            featured: false
        },
        orderBy: {
            created_at: 'desc'
        },
        take: 3
      })
    let features = await prisma.articles.findMany({
      where: {
        published:true,
        featured:true
      },
      orderBy: {
        created_at: 'desc'
      },
      take:3
    })
    return {
      props: {
        recents: JSON.parse(JSON.stringify(recents, (key, value) =>
        typeof value === 'bigint'
            ? value.toString()
            : value // return everything else unchanged
    )),
        features: JSON.parse(JSON.stringify(features, (key, value) =>
        typeof value === 'bigint'
            ? value.toString()
            : value // return everything else unchanged
    )),
      }
    };
  }


export default function Home({recents=[],features=[]}) {
  return (
    <>
      <Head>
        <title>SolePost</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Image src={shoe} alt='shoe' style={{width:'20%'}}/>
        <HomePage recents={recents} features={features} />
      </main>
    </>
  );
}
