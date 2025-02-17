import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Details() {
  let [data, setData] = useState({})
  let [chartData,setChartData]=useState([])
  

  const parts = window.location.pathname.split("/");
  const id = parts[2];
  console.log(data);
  

  const dataa = {
    labels: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun"],
    datasets: [
      {
        label: "Sotuvlar",
        data: [chartData],
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.2)",
        borderWidth: 2,
      },
    ],
  };
  useEffect(function() {
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then(response => {
      if (response.status==200) {
        return (
          setData(response.data) &&
          setChartData(
            response.data.market_data.market_cap_change_24h_in_currency
          )
        );
      }
    })
  },[id])
 return (
   <div className="bg-[#14161A] h-[91.1vh]">
     {data && data.image && (
       <div className="flex">
         <div className="w-[547px] border-[#808080] text-center border-r-2">
           <img
             src={data.image.large}
             className="mx-auto h-48 w-48"
             alt={data.name}
           />
           <h2 className="text-white text-5xl mt-5 mb-5">{data.name}</h2>
           <p className="text-white text-left ml-6 mb-5 w-[495px]">
             {data.description.en.slice(0, 189)}
           </p>
           <p className="text-white text-left font-bold mt-5 ml-6 text-2xl">
             Rank: <span className="font-normal">{data.market_cap_rank}</span>
           </p>
           <p className="text-white text-left ml-6 font-bold mt-5 text-2xl">
             Current Price:{" "}
             <span className="font-normal">
               ₹{data.market_data.current_price.usd}
             </span>
           </p>
           <p className="text-white text-left ml-6 font-bold mt-5 text-2xl">
             Market Cap:{" "}
             <span className="font-normal">
               ₹{data.market_data.market_cap.usd}M
             </span>
           </p>
         </div>
         <div className="p-10">
           <Line className="w-[900px]" data={dataa} />
         </div>
       </div>
     )}
   </div>
 );
}

export default Details





