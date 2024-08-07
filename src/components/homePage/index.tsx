"use client";
import React, { useState } from "react";
import TokenCard from "@/components/tokenCard";
import NftCard from "@/components/nftCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export let nftItems = [
  {
    name: "Season Pass",
    img: "https://i.seadn.io/s/raw/files/51559384288e302c0c82daa3f2abc719.png?auto=format&dpr=1&w=1000",
  },
  {
    name: "BGCS Club Insider",
    img: "https://i.seadn.io/s/raw/files/6ee6e5148a873b06a482b78f0694afc1.png?auto=format&dpr=1&w=1000",
  },
  {
    name: "Festival Pass",
    img: "https://i.seadn.io/s/raw/files/0b4d9c856a036cd69452829b0a5a3892.png?auto=format&dpr=1&w=1000",
  },
  {
    name: "BBQ Perks",
    img: "https://i.seadn.io/s/raw/files/150c5425880e74bb72a1a27cc1f3978d.png?auto=format&dpr=1&w=1000",
  },
];

const HomeComponent = () => {
  const [connectionModal, setConnectionModal] = useState(false);

  return (
    <main className="h-full">
      <section>
        <h1 className="font-bold  text-center leading-10 text-[black] pt-40 text-4xl lg:text-6xl">
          Quickly Deploy <br />
          NFTs or ERC20 Tokens
        </h1>
        <p className="text-slate-400 dark:text-white/70 text-center  pt-5 text-lg max-w-xl mx-auto">
          This is some additional placeholder text for helping people understand what this is...
        </p>
        <div className="flex justify-center mt-3">
          <button
            className="explore-btn hover:bg-red-600 rounded-md text-sm font-medium text-gray-30"
            onClick={() => {
              setConnectionModal(true);
            }}
          >
            Start Now
          </button>
        </div>
      </section>
      <section className="pt-20">
        <h2 className="text-center text-3xl text-[black] font-bold "> NFTs</h2>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-[30px]">
          {nftItems.map((item, index) => {
            return <NftCard key={index} item={item} />;
          })}
        </div>
      </section>
      <section className="pt-20">
        <div className="grid grid-cols-1 text-center">
          <h3 className="md:text-[30px] text-[26px] font-semibold text-black">
            Tokens
          </h3>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-[30px]">
          {Array.from("123456").map((item,index) => {
            return <TokenCard  key={index}/>;
          })}
        </div>
      </section>
      <section className="pt-20 pb-20">
        <div className="grid grid-cols-1 text-center">
          <h3 className="mb-4 md:text-3xl text-black text-2xl md:leading-snug leading-snug font-semibold">
            Q&amp;A
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
          This is some additional placeholder text for helping people understand what this is...
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <div className="w-full lg:w-2/3">
            <Accordion type="single" collapsible>
              <AccordionItem
                className="shadow dark:shadow-gray-800 rounded-md  px-3 py-1 mb-4 !border-none"
                value="item-1"
              >
                <AccordionTrigger className="text-black hover:no-underline">
                  How does it work?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 dark:text-gray-400">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="shadow dark:shadow-gray-800 rounded-md  px-3 py-1 mb-4 !border-none "
                value="item-2"
              >
                <AccordionTrigger className="text-black hover:no-underline">
                  Do I need a designer to use Giglink?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 dark:text-gray-400">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="shadow dark:shadow-gray-800 rounded-md  px-3 py-1 mb-4 !border-none"
                value="item-3"
              >
                <AccordionTrigger className="text-black hover:no-underline">
                  What do I need to do to start selling?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 dark:text-gray-400">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="shadow dark:shadow-gray-800 rounded-md  px-3 py-1 mb-4 !border-none"
                value="item-4"
              >
                <AccordionTrigger className="text-black hover:no-underline">
                  What happens when I receive an order?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 dark:text-gray-400">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
 
    </main>
  );
};

export default HomeComponent;
