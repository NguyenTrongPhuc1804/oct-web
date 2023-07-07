import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import * as ReactDOMServer from "react-dom/server";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { useDisclosure } from "@chakra-ui/react";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import ButtonMain from "../widgets/ButtonMain";
import ButtonNoneBG from "../widgets/ButtonNoneBG";
import CardMember from "../widgets/CardMember";
import CardReview from "../widgets/CardReview";
function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <section className="slide">
        <div className="slide-banner">
          <Swiper
            speed={2000}
            loop={true}
            autoplay={{
              delay: 4000,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="relative">
                <div className="absolute inset-0 bg-black opacity-70 z-[10]"></div>
                <div className="absolute z-20 sm:max-w-[700px] w-full sm:px-0 px-4 inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white">
                  <div className=" banner-content text-center text-white">
                    <h1 className="sm:text-[54px] text-xl   font-bold sm:mb-[38px] mb-3 sm:leading-[72px] leading-[24px]">
                      A Safe & Secure Home For You and Your Family
                    </h1>
                    <h3 className="sm:text-lg text-base sm:mb-[47px] mb-4">
                      2000+ people have put their trust in CCTV, How about You?
                    </h3>
                    <ButtonMain text="Start Now" />
                  </div>
                </div>
                <div className="">
                  <img
                    className="w-full h-[300px] sm:h-full object-cover"
                    src="https://geniuscript.com/serity/assets/images/resources/banner.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <div className="absolute inset-0 bg-black opacity-70 z-[10]"></div>
                <div className="absolute z-20 sm:max-w-[700px] w-full sm:px-0 px-4 inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white">
                  <div className=" banner-content text-center text-white">
                    <h1 className="sm:text-[54px] text-xl   font-bold sm:mb-[38px] mb-3 sm:leading-[72px] leading-[24px]">
                      A Safe & Secure Home For You and Your Family
                    </h1>
                    <h3 className="sm:text-lg text-base sm:mb-[47px] mb-4">
                      2000+ people have put their trust in CCTV, How about You?
                    </h3>
                    <ButtonMain text="Start Now" />
                  </div>
                </div>
                <div className="">
                  <img
                    className="w-full h-[300px] sm:h-full object-cover"
                    src="https://geniuscript.com/serity/assets/images/resources/banner.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section>
        <div className="w-screen  my-[5%]">
          <div className=" flex justify-center items-center ">
            <div className="sm:block hidden img w-[30%] relative flex items-center justify-center group">
              <div className="absolute w-[50px] h-[50px] text-4xl px-9  text-white py-9 rounded-lg right-[10%] bottom-5   text-white bg-gray-800 cursor-pointer flex items-center justify-center  ">
                <i className="fa-solid fa-play"></i>
              </div>
              <img
                src="https://geniuscript.com/serity/assets/images/resources/about-img.jpg"
                alt=""
              />
            </div>
            <div className="content sm:w-[30%] w-[80%] ">
              <h3 className="text-base font-[500] mb-[15px]">ABOUT US</h3>
              <h2 className="border-b-4 border-main sm:text-4xl text-3xl font-[600] pb-[33px]">
                We Provide Service <br />
                with 20 Years Experience
              </h2>
              <p className="py-[38px] sm:text-base text-sm  text sm:leading-[30px] leading-[25px]">
                Unto moved life, form fowl give fourth under his place signs
                which can’t be open they’re make from i were it moveth morning.
                Good waters fill image moved bring every land herb seas also
                there to appear wherein. Their moving grass. It moving very let
                doesn’t.
              </p>
              <div className="bottom-text mb-[43px] ">
                <h6 className="mb-[17px] sm:text-base text-sm">
                  For Emergency Fixing or Appointment
                </h6>
                <h2 className="sm:text-3xl text-xl  font-[600]">
                  +888 56 78 9012
                </h2>
              </div>
              <ButtonMain text="More About" />
            </div>
          </div>
        </div>
      </section>
      <section className="counter w-screen">
        <div className="counter-shadow sm:flex flex-row items-center justify-around sm:w-[80%] w-p[100%]  px-[15px] py-[86px]">
          <div className="flex sm:mb-0 mb-[15%] items-center">
            <img
              className="w-16 h-16"
              src="https://geniuscript.com/serity/assets/images/icon1.png"
              alt=""
            />
            <div className="pl-[25px] leading-[40px]">
              <h3 className="text-main text-[44px] mb-[11px] font-semibold">
                250+
              </h3>
              <h2 className="text-base">Resdential Area</h2>
            </div>
          </div>
          <div className="flex sm:mb-0 mb-[15%] items-center">
            <img
              className="w-16 h-16"
              src="https://geniuscript.com/serity/assets/images/icon1.png"
              alt=""
            />
            <div className="pl-[25px] leading-[40px]">
              <h3 className="text-main text-[44px] mb-[11px] font-semibold">
                250+
              </h3>
              <h2 className="text-base">Resdential Area</h2>
            </div>
          </div>
          <div className="flex sm:mb-0 mb-[15%] items-center">
            <img
              className="w-16 h-16"
              src="https://geniuscript.com/serity/assets/images/icon1.png"
              alt=""
            />
            <div className="pl-[25px] leading-[40px]">
              <h3 className="text-main text-[44px] mb-[11px] font-semibold">
                250+
              </h3>
              <h2 className="text-base">Resdential Area</h2>
            </div>
          </div>
          <div className="flex sm:mb-0 mb-[15%] items-center">
            <img
              className="w-16 h-16"
              src="https://geniuscript.com/serity/assets/images/icon1.png"
              alt=""
            />
            <div className="pl-[25px] leading-[40px]">
              <h3 className="text-main text-[44px] mb-[11px] font-semibold">
                250+
              </h3>
              <h2 className="text-base">Resdential Area</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[url('https://geniuscript.com/serity/assets/images/bg1.jpg')]">
        <div className="slide-product sm:w-[70%] w-[80%] m-auto my-[5%] py-[3%]">
          <div className=" mb-14 text-center">
            <h2 className="sm:text-base  font-[500] mb-[15px]">
              WHAT WE OFFER
            </h2>
            <h2 className="sm:text-4xl  text-xl mb-[39px] font-[600]">
              Video Surveillance Systems
            </h2>
            <div className="w-full h-1 bg-main"></div>
          </div>
          <Swiper
            pagination={true}
            slidesPerView={3}
            spaceBetween={30}
            speed={500}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="relative">
                <div className="">
                  <img
                    className="w-full h-[400px] sm:h-full object-cover sm:mb-[37px] mb-[15px]"
                    src="https://geniuscript.com/serity/assets/images/resources/img1.jpg"
                    alt=""
                  />
                  <h2 className="sm:text-2xl text-lg leading-[36px] font-semibold text-left">
                    Home Automation System
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <div className="pb-[30px]">
                  <img
                    className="w-full h-[400px] sm:h-full object-cover sm:mb-[37px] mb-[15px] "
                    src="https://geniuscript.com/serity/assets/images/resources/img1.jpg"
                    alt=""
                  />
                  <h2 className="sm:text-2xl text-lg leading-[36px] font-semibold text-left">
                    Home Automation System
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <div className="">
                  <img
                    className="w-full h-[400px] sm:h-full object-cover sm:mb-[37px] mb-[15px]"
                    src="https://geniuscript.com/serity/assets/images/resources/img1.jpg"
                    alt=""
                  />
                  <h2 className="sm:text-2xl text-lg leading-[36px] font-semibold text-left">
                    Home Automation System
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <div className="">
                  <img
                    className="w-full h-[400px] sm:h-full object-cover sm:mb-[37px] mb-[15px]"
                    src="https://geniuscript.com/serity/assets/images/resources/img1.jpg"
                    alt=""
                  />
                  <h2 className="sm:text-2xl text-lg leading-[36px] font-semibold text-left">
                    Home Automation System
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="">
        <div className="w-screen pb-20 relative my-[10%]">
          <div className="absolute w-[40%] h-full bg-main right-0 -z-10 opacity-70 hidden sm:block"></div>
          <img
            className="absolute right-0 w-[40%] h-full -z-20 hidden sm:block"
            src="https://geniuscript.com/serity/assets/images/resources/bg2.jpg"
            alt=""
          />
          <div className="flex justify-between sm:w-[70%] w-[90%] m-auto sm:mb-[60px] mb-0 ">
            <div className="">
              <h2>OUR RECENT WORK</h2>

              <h2 className="text-4xl font-semibold mb-[29px]">
                Our Case’s Study
              </h2>
              <div className="w-[50px] h-1 bg-main"></div>
            </div>

            <div className="flex items-center hidden sm:block pt-[2%]">
              <button className="text-white text-base font-semibold bg-black px-6  py-3 rounded-lg">
                View All Project
              </button>
            </div>
          </div>
          <div className="slide-case sm:w-[70%] w-[90%] m-auto  ">
            <Swiper
              pagination={true}
              slidesPerView={1}
              spaceBetween={30}
              speed={500}
              loop={true}
              autoplay={{
                delay: 3000,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="relative grid grid-cols-12 pb-4 ">
                  <div className="sm:col-span-5 col-span-full pr-[75px] sm:pt-[20%]  pt-[5%]">
                    <h2 className="leading-[36px] text-3xl text-2xl font-semibold sm:mb-[40px] mb-[2%]">
                      We Secure Your Home Excet Your Thought
                    </h2>
                    <p className="sm:text-base text-sm leading-[30px] sm:mb-[54px] mb-[5%]">
                      A simple and proven methodology that companies use to
                      measure customer happiness as it relates to company brand,
                      product or service.
                    </p>
                    <ButtonNoneBG text="Read More" />
                  </div>
                  <div className="sm:col-span-7 col-span-full">
                    <div className="flex">
                      <div className="list-img ml-[5%] hidden sm:block">
                        <div className="cursor-pointer">
                          <img
                            className="w-[108px] mb-[15px] h-[108px] object-cover"
                            src="https://geniuscript.com/serity/assets/images/resources/gal2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="cursor-pointer">
                          <img
                            className="w-[108px] mb-[15px] h-[108px] object-cover"
                            src="https://geniuscript.com/serity/assets/images/resources/gal2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="cursor-pointer">
                          <img
                            className="w-[108px] mb-[15px] h-[108px] object-cover"
                            src="https://geniuscript.com/serity/assets/images/resources/gal2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="cursor-pointer">
                          <img
                            className="w-[108px] mb-[15px] h-[108px] object-cover"
                            src="https://geniuscript.com/serity/assets/images/resources/gal2.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="mb-[15px] w-[100%] sm:mt-0 mt-[10%]">
                        <img
                          className="h-full object-cover sm:pl-[5%] pl-0"
                          src="https://geniuscript.com/serity/assets/images/resources/gal2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative grid grid-cols-12 pb-4 ">
                  <div className="sm:col-span-5 col-span-full pr-[75px] sm:pt-[20%]  pt-[5%]">
                    <h2 className="leading-[36px] text-3xl text-2xl font-semibold sm:mb-[40px] mb-[2%]">
                      We Secure Your Home Excet Your Thought
                    </h2>
                    <p className="sm:text-base text-sm leading-[30px] sm:mb-[54px] mb-[5%]">
                      A simple and proven methodology that companies use to
                      measure customer happiness as it relates to company brand,
                      product or service.
                    </p>
                    <ButtonNoneBG text="Read More" />
                  </div>
                  <div className="sm:col-span-7 col-span-full">
                    <div className="flex">
                      <div className="list-img ml-[5%] hidden sm:block">
                        <div className="cursor-pointer">
                          <img
                            className="w-[108px] mb-[15px] h-[108px] object-cover"
                            src="https://geniuscript.com/serity/assets/images/resources/gal2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="cursor-pointer">
                          <img
                            className="w-[108px] mb-[15px] h-[108px] object-cover"
                            src="https://geniuscript.com/serity/assets/images/resources/gal2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="cursor-pointer">
                          <img
                            className="w-[108px] mb-[15px] h-[108px] object-cover"
                            src="https://geniuscript.com/serity/assets/images/resources/gal2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="cursor-pointer">
                          <img
                            className="w-[108px] mb-[15px] h-[108px] object-cover"
                            src="https://geniuscript.com/serity/assets/images/resources/gal2.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="mb-[15px] w-[100%] sm:mt-0 mt-[10%]">
                        <img
                          className="h-full object-cover sm:pl-[5%] pl-0"
                          src="https://geniuscript.com/serity/assets/images/resources/gal2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="card-member">
        <div className=" sm:px-[20%] px-[5%] ">
          <div className=" mb-14 text-center sm:px-[20%]">
            <h2 className="sm:text-base  font-[500] mb-[15px]">
              WHAT WE OFFER
            </h2>
            <h2 className="sm:text-4xl  text-xl mb-[39px] font-[600]">
              Video Surveillance Systems
            </h2>
            <div className="w-full h-1 bg-main"></div>
          </div>
          <Swiper
            pagination={true}
            slidesPerView={3}
            spaceBetween={10}
            speed={500}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <CardMember />
            </SwiperSlide>
            <SwiperSlide>
              <CardMember />
            </SwiperSlide>
            <SwiperSlide>
              <CardMember />
            </SwiperSlide>
            <SwiperSlide>
              <CardMember />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="form">
        <div className="w-screen pt-[15%] relative">
          <div className="bg-white hidden sm:block absolute z-10  left-1/2 transform -translate-x-1/2   w-[70%] text-center py-[80px] counter-shadow -translate-y-[60%]  m-auto  ">
            <h2 className="text-base mb-[20px]">
              Have any ideas in your mind?
            </h2>
            <h2 className="text-4xl font-semibold  mb-[45px]">
              We Provide Leading Security Systems
            </h2>
            <ButtonMain text="Request A Quote" />
          </div>
          <div className="relative bg-form   bg-[url('https://geniuscript.com/serity/assets/images/resources/bg3.jpg')] bg-no-repeat bg-cover  text-white">
            <div className="flex flex-wrap-reverse pt-[12%]">
              <div className="sm:w-[50%] w-full sm:px-[12%] px-[5%]">
                <div className="mb-14 text-left hidden sm:block">
                  <h2 className="sm:text-base  font-[500] mb-[15px]">
                    GET A FREE RISK
                  </h2>
                  <h2 className="sm:text-4xl text-main text-xl mb-[39px] font-[600]">
                    Inquiry For Security System
                  </h2>
                  <div className="w-full h-1 bg-main"></div>
                </div>
                <div className="mb-6 font-semibold">
                  <h2>FEATURES :</h2>
                </div>
                <div className="flex flex-wrap items-center justify-between">
                  <div className="">
                    <div className="text-white mb-[25px] text-[15px] ">
                      <input
                        type="checkbox"
                        className="bg-transparent border-[2px] border-white  text-main focus:ring-main  w-9 h-9 rounded-lg"
                      />
                      <label htmlFor="checkbox-one" className="ml-3">
                        Smart Phone Sceurity
                      </label>
                    </div>
                    <div className="text-white mb-[25px] text-[15px]">
                      <input
                        type="checkbox"
                        className="bg-transparent border-[2px] border-white  text-main focus:ring-main  w-9 h-9 rounded-lg"
                      />
                      <label htmlFor="checkbox-one" className="ml-3">
                        Smart Phone Sceurity
                      </label>
                    </div>
                    <div className="text-white mb-[25px] text-[15px]">
                      <input
                        type="checkbox"
                        className="bg-transparent border-[2px] border-white  text-main focus:ring-main  w-9 h-9 rounded-lg"
                      />
                      <label htmlFor="checkbox-one" className="ml-3">
                        Smart Phone Sceurity
                      </label>
                    </div>
                    <div className="text-white mb-[25px] text-[15px]">
                      <input
                        type="checkbox"
                        className="bg-transparent border-[2px] border-white  text-main focus:ring-main  w-9 h-9 rounded-lg"
                      />
                      <label htmlFor="checkbox-one" className="ml-3">
                        Smart Phone Sceurity
                      </label>
                    </div>
                    <div className="text-white mb-[25px] text-[15px]">
                      <input
                        type="checkbox"
                        className="bg-transparent border-[2px] border-white  text-main focus:ring-main  w-9 h-9 rounded-lg"
                      />
                      <label htmlFor="checkbox-one" className="ml-3">
                        Smart Phone Sceurity
                      </label>
                    </div>
                  </div>
                  <div className="">
                    <div className="text-white mb-[25px] text-[15px]">
                      <input
                        type="checkbox"
                        className="bg-transparent border-[2px] border-white  text-main focus:ring-main  w-9 h-9 rounded-lg"
                      />
                      <label htmlFor="checkbox-one" className="ml-3">
                        Smart Phone Sceurity
                      </label>
                    </div>
                    <div className="text-white mb-[25px] text-[15px]">
                      <input
                        type="checkbox"
                        className="bg-transparent border-[2px] border-white  text-main focus:ring-main  w-9 h-9 rounded-lg"
                      />
                      <label htmlFor="checkbox-one" className="ml-3">
                        Smart Phone Sceurity
                      </label>
                    </div>
                    <div className="text-white mb-[25px] text-[15px]">
                      <input
                        type="checkbox"
                        className="bg-transparent border-[2px] border-white  text-main focus:ring-main  w-9 h-9 rounded-lg"
                      />
                      <label htmlFor="checkbox-one" className="ml-3">
                        Smart Phone Sceurity
                      </label>
                    </div>
                    <div className="text-white mb-[25px] text-[15px]">
                      <input
                        type="checkbox"
                        className="bg-transparent border-[2px] border-white  text-main focus:ring-main  w-9 h-9 rounded-lg"
                      />
                      <label htmlFor="checkbox-one" className="ml-3">
                        Smart Phone Sceurity
                      </label>
                    </div>
                    <div className="text-white mb-[25px] text-[15px]">
                      <input
                        type="checkbox"
                        className="bg-transparent border-[2px] border-white  text-main focus:ring-main  w-9 h-9 rounded-lg"
                      />
                      <label htmlFor="checkbox-one" className="ml-3">
                        Smart Phone Sceurity
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" sm:w-[40%] w-[100%] ">
                <div className="mb-14 text-left sm:hidden block px-4">
                  <h2 className="sm:text-base  font-[500] mb-[15px]">
                    GET A FREE RISK
                  </h2>
                  <h2 className="sm:text-4xl text-main text-xl mb-[39px] font-[600]">
                    Inquiry For Security System
                  </h2>
                  <div className="w-full h-1 bg-main"></div>
                </div>
                <div className="flex flex-wrap ">
                  <div className="sm:w-1/2 w-full">
                    <div className="mb-6 w-full px-4">
                      <input
                        placeholder="Name"
                        type="text"
                        id="default-input"
                        className="bg-transparent border py-[20px] border-gray-300 text-white text-sm rounded-lg focus:ring-white focus:border-wring-white block w-full p-2.5  "
                      />
                    </div>
                    <div className="mb-6 w-full px-4">
                      <input
                        placeholder="Phone"
                        type="text"
                        id="default-input"
                        className="bg-transparent border py-[20px] border-gray-300 text-white text-sm rounded-lg focus:ring-white focus:border-wring-white block w-full p-2.5  "
                      />
                    </div>
                    <div className="mb-6 w-full px-4">
                      <input
                        placeholder="No. of Camera"
                        type="text"
                        id="default-input"
                        className="bg-transparent border py-[20px] border-gray-300 text-white text-sm rounded-lg focus:ring-white focus:border-wring-white block w-full p-2.5  "
                      />
                    </div>
                  </div>
                  <div className="sm:w-1/2 w-full">
                    <div className="mb-6 w-full px-4">
                      <input
                        placeholder="Name"
                        type="text"
                        id="default-input"
                        className="bg-transparent border py-[20px] border-gray-300 text-white text-sm rounded-lg focus:ring-white focus:border-wring-white block w-full p-2.5  "
                      />
                    </div>
                    <div className="mb-6 w-full px-4">
                      <input
                        placeholder="Phone"
                        type="text"
                        id="default-input"
                        className="bg-transparent border py-[20px] border-gray-300 text-white text-sm rounded-lg focus:ring-white focus:border-wring-white block w-full p-2.5  "
                      />
                    </div>
                    <div className="mb-6 w-full px-4">
                      <input
                        placeholder="No. of Camera"
                        type="text"
                        id="default-input"
                        className="bg-transparent border py-[20px] border-gray-300 text-white text-sm rounded-lg focus:ring-white focus:border-wring-white block w-full p-2.5  "
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mb-6 w-full px-4">
                    <textarea
                      placeholder="Your text message"
                      type="text"
                      id="default-input"
                      className="bg-transparent sm:h-[300px] h-[100px] border py-[20px] border-gray-300 text-white text-sm rounded-lg focus:ring-white focus:border-wring-white block w-full p-2.5  "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center pb-[10%]">
              <ButtonMain text="Send Now" />
            </div>
          </div>
        </div>
      </section>
      <section className="review-comment ">
        <div className="sm:px-[15%] px-0 py-[100px]">
          <div className=" mb-14 text-center">
            <h2 className="sm:text-base  font-[500] mb-[15px]">
              WHAT PEOPLE SAY ABOUT US
            </h2>
            <h2 className="sm:text-4xl  text-xl mb-[39px] font-[600]">
              People Review For Us
            </h2>
            <div className="w-full h-1 bg-main"></div>
          </div>
          <Swiper
            pagination={true}
            slidesPerView={2}
            spaceBetween={30}
            speed={500}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <CardReview />
            </SwiperSlide>
            <SwiperSlide>
              <CardReview />
            </SwiperSlide>
            <SwiperSlide>
              <CardReview />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section>
        <div className=" mb-14 text-center">
          <h2 className="sm:text-base  font-[500] mb-[15px]">
            WHAT PEOPLE SAY ABOUT US
          </h2>
          <h2 className="sm:text-4xl  text-xl mb-[39px] font-[600]">
            People Review For Us
          </h2>
          <div className="w-full h-1 bg-main"></div>
        </div>
        <div className="px-[20%]">
          <Swiper
            pagination={true}
            slidesPerView={3}
            spaceBetween={30}
            speed={500}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-full ">
                <img
                  className="w-full h-[250px] object-cover"
                  src="https://geniuscript.com/serity/assets/images/resources/blog1.jpg"
                  alt=""
                />
                <div className="border border-2">
                  <h2 className="text-[22px] leading-[30px] mb-[15px]">
                    Install CCTV Camera for your Home
                  </h2>
                  <h3 className="text-base mb-[19px] leading-[27px]">
                    The basic premise of search reputation way management in to
                    use the greate work
                  </h3>
                  <div className="bottom"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full ">
                <img
                  className="w-full h-[250px] object-cover"
                  src="https://geniuscript.com/serity/assets/images/resources/blog1.jpg"
                  alt=""
                />
                <div className="">
                  <h2 className="text-[22px] leading-[30px] mb-[15px]">
                    Install CCTV Camera for your Home
                  </h2>
                  <h3 className="text-base mb-[19px] leading-[27px]">
                    The basic premise of search reputation way management in to
                    use the greate work
                  </h3>
                  <div className="bottom"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full ">
                <img
                  className="w-full h-[250px] object-cover"
                  src="https://geniuscript.com/serity/assets/images/resources/blog1.jpg"
                  alt=""
                />
                <div className="">
                  <h2 className="text-[22px] leading-[30px] mb-[15px]">
                    Install CCTV Camera for your Home
                  </h2>
                  <h3 className="text-base mb-[19px] leading-[27px]">
                    The basic premise of search reputation way management in to
                    use the greate work
                  </h3>
                  <div className="bottom"></div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default Home;
