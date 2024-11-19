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
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "motion/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import toteBag from "@/img/tote.jpg";
import Image from "next/image";
import avatar from "@/img/round-avatar.jpg";
import brandLogo2 from "@/img/vista2.png";
import orange from "@/img/orange.jpg";
import white from "@/img/white.jpg";
import brown from "@/img/brown.jpg";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 }, // Start hidden and offset downwards
    visible: {
      opacity: 1,
      y: 0, // Reset to original position
      // transition: {
      //   delay: 0.6
      // },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 }, // Start hidden and offset to the left
    visible: {
      opacity: 1,
      x: 0, // Move to original position
      transition: {
        duration: 2, // Animation duration in seconds
        delay: 0.6,
      },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 }, // Start hidden and offset to the right
    visible: {
      opacity: 1,
      x: 0, // Move to original position
      transition: {
        duration: 2, // Animation duration in seconds
        delay: 0.6,
      },
    },
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
            <motion.div
              className="hero__text w-[567px] flex flex-col items-center text-center xl:text-left lg:items-start rounded-xl bg-slate-50 p-4"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{
                opacity: 1,
                y: 0,
                // scale: 1.25,
                transition: { duration: 3, delay: 0.6 },
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
            >
              <h1 className="h1 mb-8">Let Your Packages Be Unique</h1>
              <p className="mb-8 p-4 xl:p-0">
                There are many variation of the passage of lorem ipsum form
                available, variation of the passages.
              </p>
              <button className="btn btn-primary mx-auto xl:mx-0">
                Get free estimate
                <IoMdArrowRoundForward className="text-accent" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* steps */}
        <section className="steps mt-[80px] xl:mt-[200px] relative z-20">
          <div className="container mx-auto">
            {/* grid items */}
            <motion.div className="grid grid-cols-1 gap-12 xl:grid-cols-3">
              {/* step 1 */}
              <motion.div
                className="steps__step text-center flex flex-col items-center justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} // Trigger once when in view
                variants={itemVariants}
                transition={{ delay: 0.2, duration: 1 }} // No delay for the first div
              >
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
              </motion.div>
              {/* step 2 */}
              <motion.div
                className="steps__step text-center flex flex-col items-center justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} // Trigger once when in view
                variants={itemVariants}
                transition={{ delay: 0.4, duration: 1.5 }} // No delay for the first div
              >
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
              </motion.div>
              {/* step 3 */}
              <motion.div
                className="steps__step text-center flex flex-col items-center justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} // Trigger once when in view
                variants={itemVariants}
                transition={{ delay: 0.6, duration: 2 }} // No delay for the first div
              >
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
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* about */}
        <section className="about mt-[80px] xl:mt-[200px] relative z-20">
          <div className="container mx-auto xl:px-0">
            <div className="flex flex-col xl:flex-row text-center xl:text-left justify-between items-center gap-8 xl:gap-[74px]">
              <motion.div
                className="about__text flex-1 order-2 xl:order-none flex flex-col justify-center item-center xl:item-start gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInLeft}
              >
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
              </motion.div>
              <motion.div
                className="about__img order-1 xl:order-none max-w-[453px] mx-auto xl:max-w-none xl:mx-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInRight}
              >
                <Image
                  src={toteBag.src}
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* testimonial */}
        <section className="testimonial mt-[80px] xl:mt-[200px] relative z-20">
          <motion.div
            className="testimonial__bg container mx-auto bg-accent-secondary rounded-[70px] px-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{
              opacity: 1,
              y: 0,
              // scale: 1.25,
              transition: { duration: 0.6, delay: 0.4 },
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
          >
            <div className="flex flex-col items-center pt-[88px] pb-[110px]">
              <motion.h2
                className="testimonial__title h2 mb-9 text-accent"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  // scale: 1.25,
                  transition: { duration: 0.8, delay: 0.6 },
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
              >
                What Clients Say About Us
              </motion.h2>
              {/* slider */}
              <div className="w-full">
                <motion.div
                  className="testimonial__slider swiper h-[400px]"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    // scale: 1.25,
                    transition: { duration: 1, delay: 0.8 },
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                >
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
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* brand */}
        <section className="brand mt-[80px] xl:mt-[150px] relative z-20">
          <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row justify-between items-center gap-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} // Trigger once when in view
                variants={itemVariants}
                transition={{ delay: 0.2, duration: 0.6 }} // No delay for the first div
              >
                <Image
                  alt="brand Image"
                  src={brandLogo2.src}
                  height={70}
                  width={200}
                  unoptimized
                  className="brand__img"
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} // Trigger once when in view
                variants={itemVariants}
                transition={{ delay: 0.4, duration: 0.8 }} // No delay for the first div
              >
                <Image
                  alt="brand Image"
                  src={brandLogo2.src}
                  height={70}
                  width={200}
                  unoptimized
                  className="brand__img"
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} // Trigger once when in view
                variants={itemVariants}
                transition={{ delay: 0.6, duration: 1 }} // No delay for the first div
              >
                <Image
                  alt="brand Image"
                  src={brandLogo2.src}
                  height={70}
                  width={200}
                  unoptimized
                  className="brand__img"
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} // Trigger once when in view
                variants={itemVariants}
                transition={{ delay: 0.8, duration: 1.2 }} // No delay for the first div
              >
                <Image
                  alt="brand Image"
                  src={brandLogo2.src}
                  height={70}
                  width={200}
                  unoptimized
                  className="brand__img"
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} // Trigger once when in view
                variants={itemVariants}
                transition={{ delay: 1, duration: 1.4 }} // No delay for the first div
              >
                <Image
                  alt="brand Image"
                  src={brandLogo2.src}
                  height={70}
                  width={200}
                  unoptimized
                  className="brand__img"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* work */}
        <section className="work mt-[80px] xl:mt-[150px] relative z-20">
          <div className="container mx-auto xl:px-0">
            {/* text */}
            <div className="text-center mb-24">
              <motion.h2
                className="work__title h2 mb-4"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  // scale: 1.25,
                  transition: { duration: 0.4, delay: 0.6 },
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
              >
                Follow Our Project
              </motion.h2>
              <motion.p
                className="work__subtitle max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  // scale: 1.25,
                  transition: { duration: 0.6, delay: 0.8 },
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, ducimus possimus earum laudantium accusantium
                ipsum deleniti, laborum veniam commodi placeat adipisci
                exercitationem?
              </motion.p>
            </div>

            {/* grid */}
            <motion.div
              className="work__grid grid grid-cols-1 xl:grid-cols-2 gap-x-[104px] gap-y-[56px]"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{
                opacity: 1,
                y: 0,
                // scale: 1.25,
                transition: { duration: 0.8, delay: 1 },
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
            >
              {/* item */}
              <div className="w-full max-w-[540px] h-full mx-auto">
                <Image
                  src={orange.src}
                  alt="image"
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "26px 0 26px 0",
                  }}
                  unoptimized
                  className="mb-6"
                />
                <div className="flex justify-between items-center w-full">
                  <div>
                    <h3 className="h3">Paper Bags</h3>
                    <p>Bags/Packaging</p>
                  </div>
                  <button className="bg-accent-secondary w-[70px] h-[70px] rounded-full flex items-center justify-center">
                    <IoMdArrowRoundForward className="text-3xl text-primary" />
                  </button>
                </div>
              </div>
              <div className="w-full max-w-[540px] h-full mx-auto">
                <Image
                  src={white.src}
                  alt="image"
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "26px 0 26px 0",
                  }}
                  unoptimized
                  className="mb-6"
                />
                <div className="flex justify-between items-center w-full">
                  <div>
                    <h3 className="h3">Packaging Boxes</h3>
                    <p>Bags/Packaging</p>
                  </div>
                  <button className="bg-accent-secondary w-[70px] h-[70px] rounded-full flex items-center justify-center">
                    <IoMdArrowRoundForward className="text-3xl text-primary" />
                  </button>
                </div>
              </div>
              <div className="w-full max-w-[540px] h-full mx-auto">
                <Image
                  src={brown.src}
                  alt="image"
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "26px 0 26px 0",
                  }}
                  unoptimized
                  className="mb-6"
                />
                <div className="flex justify-between items-center w-full">
                  <div>
                    <h3 className="h3">Packaging Sachets</h3>
                    <p>Bags/Packaging</p>
                  </div>
                  <button className="bg-accent-secondary w-[70px] h-[70px] rounded-full flex items-center justify-center">
                    <IoMdArrowRoundForward className="text-3xl text-primary" />
                  </button>
                </div>
              </div>
              <div className="w-full max-w-[540px] h-full mx-auto">
                <Image
                  src={toteBag.src}
                  alt="image"
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "auto",
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
            </motion.div>
          </div>
        </section>

        {/* stats */}
        <section className="stats mt-[80px] xl:mt-[150px] relative z-20 bg-accent-secondary py-[80px] xl:py-[150px]">
          <div className="container mx-auto">
            {/* grid */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
              {/* grid item */}
              <motion.div
                className="stats__item text-center xl:border-r xl:border-accent"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} // Trigger once when in view
                variants={itemVariants}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h3 className="h1 font-primary text-accent">12</h3>
                <p>Years Of Experience</p>
              </motion.div>
              {/* grid item */}
              <motion.div
                className="stats__item text-center xl:border-r xl:border-accent"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} // Trigger once when in view
                variants={itemVariants}
                transition={{ delay: 0.4, duration: 0.8 }} // No delay for the first div
              >
                <h3 className="h1 font-primary text-accent">25</h3>
                <p>Project Completed</p>
              </motion.div>
              {/* grid item */}
              <motion.div
                className="stats__item text-center xl:border-r xl:border-accent"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} // Trigger once when in view
                variants={itemVariants}
                transition={{ delay: 0.6, duration: 1 }} // No delay for the first div
              >
                <h3 className="h1 font-primary text-accent">13</h3>
                <p>Active Project</p>
              </motion.div>
              {/* grid item */}
              <motion.div
                className="stats__item text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} // Trigger once when in view
                variants={itemVariants}
                transition={{ delay: 0.8, duration: 1.2 }} // No delay for the first div
              >
                <h3 className="h1 font-primary text-accent">33</h3>
                <p>Happy Customers</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* news */}
        <section className="news mt-[80px] xl:mt-[150px] relative z-20">
          <div className="container mx-auto px-0">
            {/* text */}
            <div className="max-w-[810px] mx-auto text-center mb-[52px]">
              <motion.h2
                className="news__title h2 mb-3"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  // scale: 1.25,
                  transition: { duration: 1, delay: 0.6 },
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
              >
                Articles & News
              </motion.h2>
              <motion.p
                className="news__subtitle"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  // scale: 1.25,
                  transition: { duration: 1.2, delay: 0.8 },
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus beatae earum debitis eius numquam omnis deleniti
                voluptate adipisci.
              </motion.p>
            </div>
            <div className="news__grid grid grid-cols-1 xl:grid-cols-3 gap-[27px]">
              {/* grid item */}
              <motion.div
                className="news__item w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] 
              hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} // Trigger once when in view
                variants={itemVariants}
                transition={{ delay: 0.2, duration: 0.6 }} // No delay for the first div
              >
                <Image
                  src={toteBag.src}
                  alt="image"
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "60%",
                    borderRadius: "42px 42px 0px 0px",
                  }}
                  className="mb-5"
                  unoptimized
                />
                <div className="flex flex-col gap-[30px]">
                  <h3 className="h3">
                    Get Solution For Making Packages Fit in
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-base">22 June,2024</p>
                    <button className="bg-accent-secondary w-[52px] h-[52px] rounded-full flex items-center justify-center group-hover:bg-white transition-all">
                      <IoMdArrowRoundForward className="text-3xl text-primary" />
                    </button>
                  </div>
                </div>
              </motion.div>
              {/* grid item */}
              <motion.div
                className="news__item w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] 
              hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} // Trigger once when in view
                variants={itemVariants}
                transition={{ delay: 0.4, duration: 0.8 }} // No delay for the first div
              >
                <Image
                  src={white.src}
                  alt="image"
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "60%",
                    borderRadius: "42px 42px 0px 0px",
                  }}
                  className="mb-5"
                  unoptimized
                />
                <div className="flex flex-col gap-[30px]">
                  <h3 className="h3">
                    Get Solution For Making Packages Fit in
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-base">22 June,2024</p>
                    <button className="bg-accent-secondary w-[52px] h-[52px] rounded-full flex items-center justify-center group-hover:bg-white transition-all">
                      <IoMdArrowRoundForward className="text-3xl text-primary" />
                    </button>
                  </div>
                </div>
              </motion.div>
              {/* grid item */}
              <motion.div
                className="news__item w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] 
              hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} // Trigger once when in view
                variants={itemVariants}
                transition={{ delay: 0.6, duration: 1 }} // No delay for the first div
              >
                <Image
                  src={orange.src}
                  alt="image"
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "60%",
                    borderRadius: "42px 42px 0px 0px",
                  }}
                  className="mb-5"
                  unoptimized
                />
                <div className="flex flex-col gap-[30px]">
                  <h3 className="h3">
                    Get Solution For Making Packages Fit in
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-base">22 June,2024</p>
                    <button className="bg-accent-secondary w-[52px] h-[52px] rounded-full flex items-center justify-center group-hover:bg-white transition-all">
                      <IoMdArrowRoundForward className="text-3xl text-primary" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* contact */}
        <section className="contact mt-[80px] xl:mt-[150px] relative z-20">
          <motion.div
            className="contact__container container mx-auto bg-primary md:rounded-[70px] py-[80px]"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{
              opacity: 1,
              y: 0,
              // scale: 1.25,
              transition: { duration: 0.8, delay: 0.6 },
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
          >
            <div className="contact__text max-w-[640px] mx-auto text-center">
              <h2 className="h2 text-white mb-4">
                Do you want to join Packaging Hub?
              </h2>
              <p className="text-white mb-8 max-w-sm xl:max-w-none mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className="btn btn-accent mx-auto">
                Connect with us{" "}
                <IoMdArrowRoundForward className="text-primary" />
              </button>
            </div>
          </motion.div>
        </section>

        {/* footer */}
        <footer className="footer mt-[80px] xl:mt-[150px] relative z-20">
          <div className="container mx-auto px-0">
            <div className="flex flex-col xl:flex-row xl:gap-[100px] xl:mb-[100px]">
              <motion.div
                className="footer__item w-full max-w-[400px] mx-auto mb-8 text-center xl:text-left gap-12 xl:gap-[100px] xl:justify-end"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} // Trigger once when in view
                variants={itemVariants}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h3 className="h3 cursor-pointer">
                  Packaging<span className="text-accent">Hub</span>
                </h3>
                <p className="mb-8 text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur laudantium corporis nisi autem.
                </p>
                {/* socials */}
                <ul className="text-primary flex gap-[54px] justify-center xl:justify-start">
                  <li>
                    <a href="">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaXTwitter />
                    </a>
                  </li>
                </ul>
              </motion.div>
              <div className="flex-1 flex flex-col xl:flex-row text-center xl:text-left gap-12 xl:gap-[100px] xl:justify-end">
                <motion.div
                  className="footer__item"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }} // Trigger once when in view
                  variants={itemVariants}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <h3 className="h3 mb-3">Pages</h3>
                  <ul className="flex flex-col gap-4">
                    <li>
                      <a href="">About us</a>
                    </li>
                    <li>
                      <a href="">Testimonial</a>
                    </li>
                    <li>
                      <a href="">Our Work</a>
                    </li>
                    <li>
                      <a href="">News</a>
                    </li>
                    <li>
                      <a href="">Contact</a>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  className="footer__item"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }} // Trigger once when in view
                  variants={itemVariants}
                  transition={{ delay: 0.6, duration: 1 }}
                >
                  <h3 className="h3 mb-3">Services</h3>
                  <ul className="flex flex-col gap-4">
                    <li>
                      <a href="">Paper Bag</a>
                    </li>
                    <li>
                      <a href="">Packaging Boxes</a>
                    </li>
                    <li>
                      <a href="">Branding</a>
                    </li>
                    <li>
                      <a href="">Printing</a>
                    </li>
                    <li>
                      <a href="">Merchendice</a>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  className="footer__item max-w-[260px] mx-auto xl:mx-0"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }} // Trigger once when in view
                  variants={itemVariants}
                  transition={{ delay: 0.8, duration: 1.2 }}
                >
                  <h3 className="h3 mb-3">Contact</h3>
                  <div className="flex flex-col gap-6 text-[20px]">
                    <p>{"13 Naples St. Atlanta, New york(NY), 14808"}</p>
                    <p>packaginghub@gmail.com</p>
                    <p>{"(234) 812 345 6789"}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          {/* copyright */}
          <motion.p
            className="footer__copyright text-center text-lg py-10 bg-white xl:border-t"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{
              opacity: 1,
              y: 0,
              // scale: 1.25,
              transition: { duration: 1, delay: 1 },
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
          >
            Copyright &copy; Packaging Hub 2024. All right reserved.
          </motion.p>
        </footer>

        {/* temp div */}
        {/* <div className="h-[3000px]"></div> */}
      </main>
    </div>
  );
}
