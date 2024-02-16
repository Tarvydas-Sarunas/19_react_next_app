import Link from 'next/link';
import { useParams } from 'next/navigation';
import { list } from 'postcss';
import React from 'react';

export default function OneReceptcard({ item }) {
  return (
    <li className='border shadow-md'>
      <img
        src={item.image}
        alt={item.name}
        className='block h-56 w-full object-cover'
      />
      <h2>{item.name}</h2>
      <p>Cuisine: {item.cuisine}</p>
      <p>Difficulty: {item.difficulty}</p>
      <p>Rating: {item.rating}</p>
      {/* <ul>
        <p>Ingredients</p>
        {item.ingredients.map((ingr) => (
          <li key={ingr}>{ingr}</li>
        ))}
      </ul>
      <ul>
        <p>Instructions</p>
        {item.instructions.map((inst) => (
          <li key={inst}>{inst}</li>
        ))}
      </ul> */}
      <Link href={`/receptai/${item.id}`}>Read More</Link>
    </li>
  );
}
