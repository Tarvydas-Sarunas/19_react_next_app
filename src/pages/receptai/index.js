import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import OneReceptcard from '@/components/receptu dalis/Onereceptcard';

const inter = Inter({ subsets: ['latin'] });

const url = 'https://dummyjson.com/recipes';

export default function Receptai({ receptai }) {
  const [receptArr, setReceptArr] = useState(receptai);
  console.log('receptai ===', receptai);
  // parsiusti receptus is dummy JSON
  // useEffect(() => {
  //   getReceptus();
  // }, []);

  // const getReceptus = () => {
  //   axios
  //     .get(url)
  //     .then((resp) => {
  //       const resceptai = resp.data.recipes;
  //       setReceptArr(resceptai);
  //     })
  //     .catch((error) => {
  //       console.warn('ivyko klaida:', error);
  //     });
  // };
  // sugeneruoti saraso ar korteliu pavidalu
  return (
    <>
      <Header />
      <div className='container'>
        <h1 className='text-5xl my-4 font-semibold'>Receptai</h1>
        <Link href={'/receptai/arhyvas'}>Go to Arhyvas</Link>
        <div>
          <ul className='grid grid-cols-3 gap-1'>
            {receptArr.map((rObj) => (
              <OneReceptcard key={rObj.id} item={rObj} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  function getData() {
    return fetch(url)
      .then((resp) => resp.json())
      .then((atsObj) => {
        console.log('atsObj ===', atsObj);
        return atsObj.recipes;
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }

  const receptai = await getData();
  console.log(
    'receptai ===',
    receptai.map(({ name }) => name)
  );

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      receptai,
    },
  };
}
