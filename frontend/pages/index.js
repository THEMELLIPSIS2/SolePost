import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import '@/styles/Homepage.module.css'
import shoe from '../public/shoe.svg';
import {HomePage} from '../components/Home'
import StrapiClient from '@/lib/strapi-client';

const client = new StrapiClient()

export const getStaticProps = async () => {
  const articles = await client.fetchData('/articles')
  return {
    props: {
      articles: articles
    }
  }
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
