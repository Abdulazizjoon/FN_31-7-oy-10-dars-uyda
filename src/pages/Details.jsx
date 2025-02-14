import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Details() {
  let [data,setData]=useState([])
  const parts = window.location.pathname.split("/");
  const id = parts[2]; 
  console.log(id);
  
  useEffect(function() {
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then(response => {
      if (response.status==200) {
        return setData(response.data)
      }
    })
  },[])
  return (
    <div className="bg-[#14161A]">
      {
        data.length > 0 && data.map((value, index) => {
          return (
            <div key={index}>
              <div>
                <img src={value.image} className='w-3' alt="" />
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Details