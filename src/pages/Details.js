import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client';
const GET_COUNTRY = gql`
query country($code:ID!){
  country(code:$code){
    name
    capital
    currency
    languages{
      code
      name
      native
    }
  }
}
`;

export default function Details() {
    const {id} = useParams()
    const { error, data } = useQuery(GET_COUNTRY, {
      variables:{code: id}
    });
  return (
    <div>
      <h1>Details</h1>
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
      <h1>Code: {id}</h1>
      <h1>Name: {data?.country.name}</h1>
      <h1>Capital: {data?.country.capital}</h1>
      <h1>Currency: {data?.country.currency}</h1>
      <h1>Languages</h1>
      <hr/>
      {data?.country.languages.map((item) => (
        <div key={item.id}>
          <h3>Code: {item.code}</h3>
          <h3>Name: {item.name}</h3>
          <h3>Native: {item.native}</h3>
          <hr/>
        </div>
      ))}
    </div>
  )
}