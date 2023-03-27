import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { RingLoader } from 'react-spinners';

const GET_COUNTRIES = gql`
{
    countries{
      name,
      emoji,
      currency,
      continent{
        name
      }
    }
  }
`;

export default function Home() {
    const { loading, error, data } = useQuery(GET_COUNTRIES);
  return (
    <div>
      <h1>Home</h1>
      {loading && <RingLoader color="rgba(54, 214, 182, 0.67)"/>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
    </div>
  )
}