import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-[#192032] relative text-gray-200 dark:text-gray-200 mt-24 ">
        <div className="container mx-auto px-5 lg:px-0">
          <div className="grid grid-cols-1">
            <div className="relative py-16">
              <div className="relative w-full">
                <div className="relative -top-40  bg-white dark:bg-slate-900 lg:px-8 px-6 py-10 rounded-xl shadow dark:shadow-gray-800 overflow-hidden">
                  <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div className="md:text-start text-center z-1">
                      <h3 className="text-[26px] font-semibold text-slate-900 dark:text-white">
                        Subscribe to Newsletter!
                      </h3>
                      <p className="text-slate-400">
                        Subscribe to get latest updates and information.
                      </p>
                    </div>

                    <div className="z-1">
                      <form className="relative max-w-lg md:ms-auto">
                        <input
                          type="email"
                          name="email"
                          className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-slate-900 dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800"
                          placeholder="Enter your email :"
                        />
                        <button
                          type="submit"
                          className="explore-btn absolute top-[2px] end-[3px] h-[46px] hover:bg-red-600 text-white rounded-full"
                        >
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="absolute -top-5 -start-5">
                    <div className="uil uil-envelope lg:text-[150px] text-7xl text-slate-900/5 dark:text-white/5 -rotate-45"></div>
                  </div>

                  <div className="absolute -bottom-5 -end-5">
                    <div className="uil uil-pen lg:text-[150px] text-7xl text-slate-900/5 dark:text-white/5"></div>
                  </div>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] -mt-24"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[30px] container mx-auto px-5 dark:border-gray-700">
          <div className="flex justify-between items-center ">
            <div>
              <p className="text-white"> © 2024 Step3 All rights reserved.</p>
            </div>
            <div className="flex justify-start items-center gap-2">
                <Link className=" border border-[#fff] rounded-md hover:border-red-600 dark:hover:border-red-600 hover:bg-red-600 dark:hover:bg-red-600 py-1 px-1" target="blank" href="https://twitter.com/getstep3">  
                <Twitter className="h-[14px] text-white" />
                </Link>
                <Link className=" border  border-[#fff] rounded-md hover:border-red-600 dark:hover:border-red-600 hover:bg-red-600 dark:hover:bg-red-600 py-1 px-1" target="blank" href="https://www.linkedin.com/company/getstep3/mycompany/">  
                <Linkedin className="h-[14px] text-white " />
                </Link>
                
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
