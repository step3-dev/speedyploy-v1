import Link from "next/link";
import React, { ReactNode } from "react";

const TokenCard = () => {
  return (
    <div className="flex justify-between items-center p-3 rounded-md bg-white dark:bg-slate-900 shadow-switcher dark:shadow-gray-800">
      <div className="flex items-center">
        <div className="relative inline-block">
          <img
            src="https://www.pngall.com/wp-content/uploads/10/Binance-Coin-Crypto-Logo-PNG-Background.png"
            className="h-16 rounded-md"
            alt=""
          />
          <i className="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -end-2"></i>
        </div>

        <div className="ms-3">
          <Link
            href=""
            className="font-semibold text-slate-400 block hover:text-red-600"
          >
            SPDY
          </Link>
          <span className="text-slate-400 text-sm block mt-0.5">
            ERC20
          </span>
        </div>
      </div>

      <Link
        href=""
        className=" explore-btn btn-icon rounded-full bg-red-600 hover:bg-red-500 border-red-600 hover:border-red-500 hover:text-white"
      >
       Mint
      </Link>
    </div>
  );
};

export default TokenCard;
