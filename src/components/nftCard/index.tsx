import Link from "next/link";
import React, { ReactNode } from "react";


const NftCard = ({item}:{item:any}) => {
  return (
    <div className="group  shadow-switcher relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900  border-gray-100 dark:border-gray-800 hover:shadow-card-2 dark:shadow-card-2 hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
      <div className="relative overflow-hidden">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={item.img}
            className="rounded-lg object-cover w-full h-[300px] shadow-card-2 dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
            alt=""
          />
        </div>
        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
          <Link
            href="#"
            className="explore-btn btn-sm rounded-full bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white"
          >
             Mint Now
          </Link>
        </div>
      </div>
      <div className="mt-3">
        <div className="my-3 text-center">
          <Link
            href="#"
            className="font-semibold  text-slate-600 hover:text-red-600"
          >
            {item.name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
