import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import OneReceptcard from '@/components/receptu dalis/Onereceptcard';

const inter = Inter({ subsets: ['latin'] });

const url = 'https://dummyjson.com/recipes';

export default function Receptai() {
  const [receptArr, setReceptArr] = useState([]);
  // parsiusti receptus is dummy JSON
  useEffect(() => {
    getReceptus();
  }, []);

  const getReceptus = () => {
    axios
      .get(url)
      .then((resp) => {
        const resceptai = resp.data.recipes;
        setReceptArr(resceptai);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  };
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
