import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import eye from "../img/Eye.svg";
import Pagination from "@mui/material/Pagination";


import "swiper/css";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import axios from "axios";
function Home() {
  let [sliderData, SetSliderData] = useState([]);
  let [data, setData] = useState([]);
  let [page, setPage] = useState(1)
  console.log(page);
  
  useEffect(function () {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
      )
      .then((response) => {
        if (response.status == 200) {
          return SetSliderData(response.data) && setData(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(function () {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=${page}&sparkline=false&price_change_percentage=24h`
      )
      .then((response) => {
        if (response.status == 200) {
          return SetSliderData(response.data) && setData(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page])
  console.log(sliderData);
  return (
    <div>
      <div className="img w-full h-[400px] pt-16">
        <h2 className="text-[#87CEEB] flex justify-center text-6xl">
          CRYPTOFOLIO WATCH LIST
        </h2>
        <p className="mt-3.5 text-[#A9A9A9] text-[14px] flex justify-center mb-11">
          Get all the Info regarding your favorite Crypto Currency
        </p>
        <Swiper
          className="w-7xl"
          spaceBetween={30}
          slidesPerView="4"
          centeredSlides={false}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {sliderData.length > 0 &&
            sliderData.map((value, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="w-[250px] flex justify-center items-center"
                >
                  <div className="text-center w-full">
                    <img
                      className="w-20 h-20 mx-auto"
                      src={value.image}
                      alt=""
                    />
                    <div className=" flex justify-center gap-1">
                      <p className="justify-center flex text-white">
                        {value.symbol.toUpperCase()}
                      </p>
                      <p className="text-[red]">
                        {value.ath_change_percentage.toFixed(2)}
                      </p>
                    </div>
                    <p className="text-white text-xl">
                      {value.price_change_24h}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className="bg-[#14161A]">
        <div className="container mx-auto w-[1232px]">
          <h2 className="text-4xl h-11 flex justify-center text-white mb-3">
            Cryptocurrency Prices by Market Cap
          </h2>
          <input
            type="text"
            className="bg-transparent border w-full mb-5 h-[61px] rounded-md pl-3 text-white "
            placeholder="Search For a Crypto Currency..."
          />
          <div className="bg-[#87CEEB] w-full rounded-xl flex pt-5 pb-5 pl-4 pr-4 mb-10">
            <p className="font-bold text-[14px] mr-[540px]">Coin</p>
            <p className="font-bold text-[14px] mr-[200px]">Price</p>
            <p className="font-bold text-[14px] mr-[160px]">24h Change</p>
            <p className="font-bold text-[14px] ">Market Cap</p>
          </div>
          <div>
            {sliderData.length > 0 &&
              sliderData.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="w-full pt-4 border-b-[1px] h-24 pl-4 "
                  >
                    <div className="w-[445px] flex items-center">
                      <img src={value.image} className="w-12 h-12" alt="" />
                      <div className="text-white ml-3">
                        <p className="text-2xl">{value.symbol.toUpperCase()}</p>
                        <p className="text-[14px] w-[114px]">{value.name}</p>
                      </div>
                      <div className="w-[363px] -mt-3">
                        <p className="text-white ml-[380px] w-[100px]">
                          ₹ {value.atl_change_percentage.toFixed(2)}
                        </p>
                      </div>
                      <div className="ml-[260px] flex gap-4">
                        <img src={eye} className="w-6 h-6" alt="eye icon" />
                        <p className="text-white">+{value.atl}%</p>
                      </div>
                      <div className="ml-[150px]">
                        <p className="text-white w-[140px]">
                          ₹ {value.market_cap}M
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <Pagination
            page={page}
            onChange={(e, value) => {
              setPage(value);
            }}
            className="flex justify-center"
            count={10}
            color="primary"
            sx={{mt:'20px',pb:'20px'}}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
