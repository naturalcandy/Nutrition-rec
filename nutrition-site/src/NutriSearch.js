import './App.css';
import React, { useState } from 'react';
import Axios from 'axios';

//Make a call to nutritionix api and
//display results
export function SearchSpecification () {
    const [foodData, setFoodData] = useState(null)
    const [query, setQuery] = useState("")
    const fetchFood = (query, setFoodData) => {
      Axios.get('https://trackapi.nutritionix.com/v2/search/instant', {
      headers : {
        'x-app-id' : 'hidden for security reasons',
        'x-app-key' : 'hidden for security reasons'
        },
      params: {
          query: query,
          //we query for resturaunt brand food by setting the
          //common property to false
          common: false
        }
      }).then((res) => {
        setFoodData(res.data)
      })
    }
    return (
      <div>
        <input value={query} placeholder="Search..." onChange={(event)=>setQuery(event.target.value)} />
        <button onClick={() => fetchFood(query, setFoodData)}>Search</button>
        <ul>
          {foodData?.results.map(item => (
            <li key = {item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    )
  }