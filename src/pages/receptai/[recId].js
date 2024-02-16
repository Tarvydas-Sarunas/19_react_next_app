import Header from '@/components/Header';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
// import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function SingleRecept({ item }) {
  // const {id} = useParams()
  // const router = useRouter();
  // const receptId = router.query.recId;
  // const singleRecUrl = `https://dummyjson.com/recipes/${receptId}`;

  // const [receptObj, setRecepObj] = useState({});
  // console.log('receptObj ===', receptObj);

  // useEffect(() => {
  //   axios
  //     .get(singleRecUrl)
  //     .then((resp) => {
  //       const receptoObj = resp.data;
  //       setRecepObj(receptoObj);
  //       console.log('receptObj ===', receptObj);
  //     })
  //     .catch((error) => {
  //       console.warn('ivyko klaida:', error);
  //     });
  // }, []);

  return (
    <>
      <Header />
      <div className='container'>
        <h1 className='text-5xl my-4 font-semibold text-center'>
          Single receptas
        </h1>
      </div>

      {/* <div className='border shadow-md w-2/3 ml-auto mr-auto'>
        <img
          src={receptObj.image}
          alt={receptObj.name}
          className='block h-56 w-full object-cover'
        />
        <h2>{receptObj.name}</h2>
        <p>Cuisine: {receptObj.cuisine}</p>
        <p>Difficulty: {receptObj.difficulty}</p>
        <p>Rating: {receptObj.rating}</p>
        <ul>
          <p>Ingredients:</p>
          {receptObj.ingredients?.map((ingr) => (
            <li key={ingr}>{ingr}</li>
          ))}
        </ul>
        <ul>
          <p>Instructions:</p>
          {receptObj.instructions?.map((inst) => (
            <li key={inst}>{inst}</li>
          ))}
        </ul>
      </div> */}
      <div className='border shadow-md w-2/3 ml-auto mr-auto'>
        <Image
          src={item.image}
          alt={item.name}
          width={500}
          height={500}
          className='block h-56 w-full object-cover'
        />
        {/* <img
          src={item.image}
          alt={item.name}
          className='block h-56 w-full object-cover'
        /> */}
        <h2>{item.name}</h2>
        <p>Cuisine: {item.cuisine}</p>
        <p>Difficulty: {item.difficulty}</p>
        <p>Rating: {item.rating}</p>
        <ul>
          <p>Ingredients:</p>
          {item.ingredients?.map((ingr) => (
            <li key={ingr}>{ingr}</li>
          ))}
        </ul>
        <ul>
          <p>Instructions:</p>
          {item.instructions?.map((inst) => (
            <li key={inst}>{inst}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

const rUrl = 'https://dummyjson.com/recipes';

export async function getStaticPaths() {
  function getData() {
    return fetch(rUrl)
      .then((resp) => resp.json())
      .then((atsObj) => {
        console.log('atsObj ===', atsObj);
        return atsObj.recipes;
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }

  const allData = await getData();

  const paths = allData.map((rObj) => {
    return {
      params: {
        recId: rObj.id.toString(),
      },
    };
  });
  console.log('paths ===', paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // Call an external API endpoint to get posts
  const recId = context.params.recId;

  function getData() {
    return fetch(`${rUrl}/${recId}`)
      .then((resp) => resp.json())
      .then((singleRespObj) => {
        return singleRespObj;
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }

  const curentObj = await getData();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      item: curentObj,
    },
  };
}
