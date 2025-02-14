import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="bg-[#15171B] pt-3 pb-3">
      <div className="container mx-auto w-[1232px] flex justify-between items-center">
        <Link className="text-[#87CEEB]">CRYPTOFOLIO</Link>
        <div>
          <select className="text-white bg-transparent cursor-pointer">
            <option className="bg-transparent text-black">USD</option>
            <option className="bg-transparent text-black">EUR</option>
            <option className="bg-transparent text-black">RUB</option>
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