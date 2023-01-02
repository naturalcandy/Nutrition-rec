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
        'x-app-id' : 'hidden for security',
        'x-app-key' : 'hidden for security'
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
          <form onSubmit={event => {
              event.preventDefault()
              fetchFood(query, setFoodData)}}>
    
          <input value={query} placeholder="Search..." onChange={(event)=>setQuery(event.target.value)} />
          
          <button type="submit">Search</button>
          </form>
          {foodData == null ? (
              'Loading...'
          ) : (
            //map food id with its brand + item name
          <ul>
            {foodData.branded.map(item => (
              <li key = {item.nix_item_id}>{item.brand_name_item_name}</li>
            ))}
          </ul>)}
        </div>
      )
  }