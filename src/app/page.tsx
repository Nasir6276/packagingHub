"use client";

import { IoMdArrowRoundForward } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";
import { GiPaperBagOpen } from "react-icons/gi";
import { PiPackageFill } from "react-icons/pi";
import { TbPaperBag } from "react-icons/tb";
import { FaPhoneFlip } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import boxImage from "@/img/tote.jpg";
import Image from "next/image";
import avatar from "@/img/round-avatar.jpg";
import brandLogo2 from "@/img/vista2.png";
import orange from "@/img/orange.jpg";

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
                isNavOpen ? "h-[350px] p-6" : "h-0 p-0"
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
        <section className="about mt-[80px] xl:mt-[200px] relative z-20">
          <div className="container mx-auto xl:px-0">
            <div className="flex flex-col xl:flex-row text-center xl:text-left justify-between items-center gap-8 xl:gap-[74px]">
              <div className="flex-1 order-2 xl:order-none flex flex-col justify-center item-center xl:item-start gap-8">
                <h2 className="h2">Lorem ipsum dolor sit amet consectetur.</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Excepturi voluptates reiciendis odio, asperiores aut similique
                  eligendi dolores nobis, fugit quo inventore enim minima
                  consequatur doloribus molestias architecto a laudantium
                  dignissimos.
                </p>

                {/* phone */}
                <div className="flex items-center justify-center xl:justify-start gap-4">
                  <div className="bg-accent/15 w-[93px] h-[93px] rounded-full flex justify-center items-center">
                    <FaPhoneFlip className="text-accent text-4xl" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold">0812 345 6789</div>
                    <div>Call Us Anytime</div>
                  </div>
                </div>
                {/* btn */}
                <div className="flex items-center justify-center xl:justify-start">
                  <button className="btn btn-primary">
                    Get fre estimation
                    <IoMdArrowRoundForward className="text-accent" />
                  </button>
                </div>
              </div>
              <div className="about__img order-1 xl:order-none max-w-[453px] mx-auto xl:max-w-none xl:mx-0">
                <Image
                  src={boxImage.src}
                  alt="image"
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "400px",
                    borderRadius: "26px 0 26px 0",
                  }}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* testimonial */}
        <section className="testimonial mt-[80px] xl:mt-[200px] relative z-20">
          <div className="testimonial__bg container mx-auto bg-accent-secondary rounded-[70px] px-6">
            <div className="flex flex-col items-center pt-[88px] pb-[110px]">
              <h2 className="testimonial__title h2 mb-9 text-accent">
                What Clients Say About Us
              </h2>
              {/* slider */}
              <div className="w-full">
                <div className="testimonial__slider swiper h-[400px]">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    loop={true}
                    pagination={{
                      clickable: true,
                      el: ".custom-swiper-pagination",
                    }}
                    // navigation={true}
                    className="default-carousel"
                    slidesPerView={3}
                    spaceBetween={20}
                    breakpoints={{
                      320: { slidesPerView: 1 },
                      960: { slidesPerView: 2 },
                      1200: { slidesPerView: 3 },
                    }}
                  >
                    {/* slide 1 */}
                    <SwiperSlide className="swiper-slider">
                      <div className="testimonial__item w-full max-w-[450px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto ">
                        <div className="flex gap-4 mb-4">
                          <Image
                            alt="avatar"
                            height={65}
                            width={65}
                            className="rounded-full"
                            src={avatar.src}
                          />
                          <div>
                            <h3 className="h3">Ismail Nasiru</h3>
                            <div>Jos, Nigeria</div>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Adipisci fugiat repellendus sed iure.
                        </p>
                      </div>
                    </SwiperSlide>
                    {/* slide 2 */}
                    <SwiperSlide className="swiper-slider">
                      <div className="testimonial__item w-full max-w-[450px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto ">
                        <div className="flex gap-4 mb-4">
                          <Image
                            alt="avatar"
                            height={65}
                            width={65}
                            className="rounded-full"
                            src={avatar.src}
                          />
                          <div>
                            <h3 className="h3">Ismail Nasiru</h3>
                            <div>Jos, Nigeria</div>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Adipisci fugiat repellendus sed iure.
                        </p>
                      </div>
                    </SwiperSlide>
                    {/* slide 3 */}
                    <SwiperSlide className="swiper-slider">
                      <div className="testimonial__item w-full max-w-[450px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto ">
                        <div className="flex gap-4 mb-4">
                          <Image
                            alt="avatar"
                            height={65}
                            width={65}
                            className="rounded-full"
                            src={avatar.src}
                          />
                          <div>
                            <h3 className="h3">Ismail Nasiru</h3>
                            <div>Jos, Nigeria</div>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Adipisci fugiat repellendus sed iure.
                        </p>
                      </div>
                    </SwiperSlide>
                    {/* slide 4 */}
                    <SwiperSlide className="swiper-slider">
                      <div className="testimonial__item w-full max-w-[450px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto ">
                        <div className="flex gap-4 mb-4">
                          <Image
                            alt="avatar"
                            height={65}
                            width={65}
                            className="rounded-full"
                            src={avatar.src}
                          />
                          <div>
                            <h3 className="h3">Ismail Nasiru</h3>
                            <div>Jos, Nigeria</div>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Adipisci fugiat repellendus sed iure.
                        </p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  {/* Custom Pagination */}
                  <div className="custom-swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* brand */}
        <section className="brand mt-[80px] xl:mt-[150px] relative z-20">
          <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row justify-between items-center gap-12">
              <Image
                alt="brand Image"
                src={brandLogo2.src}
                height={70}
                width={200}
                unoptimized
                className="brand__img"
              />
              <Image
                alt="brand Image"
                src={brandLogo2.src}
                height={70}
                width={200}
                unoptimized
                className="brand__img"
              />
              <Image
                alt="brand Image"
                src={brandLogo2.src}
                height={70}
                width={200}
                unoptimized
                className="brand__img"
              />
              <Image
                alt="brand Image"
                src={brandLogo2.src}
                height={70}
                width={200}
                unoptimized
                className="brand__img"
              />
              <Image
                alt="brand Image"
                src={brandLogo2.src}
                height={70}
                width={200}
                unoptimized
                className="brand__img"
              />
            </div>
          </div>
        </section>

        {/* work */}
        <section className="work mt-[80px] xl:mt-[150px] relative z-20">
          <div className="container mx-auto">
            {/* grid */}
            <div className="work__grid">
              <div className="w-full max-w-[540px] h-full mx-auto">
                <Image
                  src={orange.src}
                  alt="image"
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "26px 0 26px 0",
                  }}
                  unoptimized
                  className="mb-6"
                />
                <div className="flex justify-between items-center w-full">
                  <div>
                    <h3 className="h3">Modern Bags</h3>
                    <p>Bags/Packaging</p>
                  </div>
                  <button className="bg-accent-secondary w-[70px] h-[70px] rounded-full flex items-center justify-center">
                    <IoMdArrowRoundForward className="text-3xl text-primary" />
                  </button>
                </div>
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
