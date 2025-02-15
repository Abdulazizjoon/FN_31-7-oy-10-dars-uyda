import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  let [option, setOption] = useState('USD')
  localStorage.setItem('pul',option)
  return (
    <div className="bg-[#15171B] pt-3 pb-3 drop-shadow-2xl">
      <div className="container mx-auto w-[1232px] flex justify-between items-center">
        <Link className="text-[#87CEEB]">CRYPTOFOLIO</Link>
        <div>
          <select value={option} onChange={e=>{setOption(e.target.value)}} className="text-white bg-transparent cursor-pointer">
            <option value="USD" className="bg-transparent text-black">USD</option>
            <option value="EUR" className="bg-transparent text-black">EUR</option>
            <option value="RUB" className="bg-transparent text-black">RUB</option>
          </select>
          <button className="pt-2 pb-2 pl-5 pr-5 bg-[#87CEEB] text-black ml-3.5 rounded-md cursor-pointer">
            WATCH LIST
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header