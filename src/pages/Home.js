import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { RingLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

const GET_COUNTRIES = gql`
{
    countries{
     code
      name
      emoji
      currency
      continent{
        name
      }
    }
  }
`;

export default function Home() {
    const { loading, error, data } = useQuery(GET_COUNTRIES);
  return (
    <div className='container'>
      {loading && <RingLoader color="rgba(54, 214, 182, 0.67)"/>}
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
      {data && (data?.countries.map((item) => (
        <div key={item.code}>
          <h1>{item.code}</h1>
          <h1>{item.name}</h1>
          <h1>{item.emoji}</h1>
          <Link className='btn btn-primary' to={`/${item.code}`}>Details</Link>
          <hr/>
        </div>
      )))}
    </div>
  )
}