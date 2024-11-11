"use client";

import { IoMdArrowRoundForward } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";
import { GiPaperBagOpen } from "react-icons/gi";
import { PiPackageFill } from "react-icons/pi";
import { TbPaperBag } from "react-icons/tb";

import boxImage from "@/img/Custom-Made.jpeg";
import Image from "next/image";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div>
      {/* header */}
      <header className="sticky top-0 h-[90px] shadow-xl z-30 bg-white">
        <div className="container mx-auto flex justify-between h-full items-center">
          <h3 className="h3 cursor-pointer">
            Packaging<span className="text-accent">Hub</span>
          </h3>
          {/* nav */}
          <nav>
            <div
              className="cursor-pointer lg:hidden"
              id="nav_trigger_btn"
              onClick={toggleNav}
            >
              <CgMenuRight className="text-4xl text-primary" />
            </div>
            <ul
              className={`fixed w-full ${
                isNavOpen ? "h-0 p-0" : "h-[350px] p-6"
              } bg-white overflow-hidden border-t top-[90px] left-0 right-0 flex flex-col gap-4 lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full transition-all duration-300`}
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Testimonial</a>
              </li>
              <li>
                <a href="#">Our Work</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* page wrapper */}
      <main className="max-w-[1920px] mx-auto bg-white overflow-hidden">
        {/* grid gap */}
        {/* <div className="xl:bg-[url('../img/Custom-Made.jpeg')] xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0 left-0 right-0 z-10"></div> */}

        {/* hero */}
        <section className="hero h-[640px] xl:h-[840px] bg-[url('../img/pexels.jpg')] bg-center md:bg-cover bg-no-repeat bg-fixed relative z-20">
          <div className="container mx-auto h-full flex items-center justify-center xl:justify-start">
            <div className="hero__text w-[567px] flex flex-col items-center text-center xl:text-left lg:items-start rounded-xl bg-slate-50 p-4">
              <h1 className="h1 mb-8">Let Your Packages Be Unique</h1>
              <p className="mb-8">
                There are many variation of the passage of lorem ipsum form
                available, variation of the passages.
              </p>
              <button className="btn btn-primary mx-auto xl:mx-0">
                Get free estimate
                <IoMdArrowRoundForward className="text-accent" />
              </button>
            </div>
          </div>
        </section>

        {/* steps */}
        <section className="steps mt-[80px] xl:mt-[200px] relative z-20">
          <div className="container mx-auto">
            {/* grid items */}
            <div className="grid grid-cols-1 gap-12 xl:grid-cols-3">
              {/* step 1 */}
              <div className="steps__step text-center flex flex-col items-center justify-center">
                <div className="mb-4">
                  <GiPaperBagOpen className="text-5xl text-accent" />
                </div>
                <h3 className="h3 mb-4">Paper Bags</h3>
                <p className="mb-5 max-w-md mx-auto">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ullam neque animi ex ipsa!
                </p>
                <a
                  href="#"
                  className="font-medium flex justify-center items-center gap-2"
                >
                  Read more
                  <IoMdArrowRoundForward className="text-accent" />
                </a>
              </div>
              {/* step 2 */}
              <div className="steps__step text-center flex flex-col items-center justify-center">
                <div className="mb-4">
                  <PiPackageFill className="text-5xl text-accent" />
                </div>
                <h3 className="h3 mb-4">Packaging Boxes</h3>
                <p className="mb-5 max-w-md mx-auto">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ullam neque animi ex ipsa!
                </p>
                <a
                  href="#"
                  className="font-medium flex justify-center items-center gap-2"
                >
                  Read more
                  <IoMdArrowRoundForward className="text-accent" />
                </a>
              </div>
              {/* step 3 */}
              <div className="steps__step text-center flex flex-col items-center justify-center">
                <div className="mb-4">
                  <TbPaperBag className="text-5xl text-accent" />
                </div>
                <h3 className="h3 mb-4">Pouches & Sachets</h3>
                <p className="mb-5 max-w-md mx-auto">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ullam neque animi ex ipsa!
                </p>
                <a
                  href="#"
                  className="font-medium flex justify-center items-center gap-2"
                >
                  Read more
                  <IoMdArrowRoundForward className="text-accent" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* about */}
        <section className="about mt-[80px] xl:mt[200px] relative z-20">
          <div className="container mx-auto xl:px-0">
            <div className="flex flex-col xl:flex-row text-center xl:text-left justify-between items-center gap-8 xl:gap-[74px]">
              <div className="bg-pink-200 flex-1">text</div>
              <div className="max-w-[453px]">
                <Image
                  src={boxImage.src}
                  alt="image"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </section>

        {/* temp div */}
        <div className="h-[3000px]"></div>
      </main>
    </div>
  );
}
