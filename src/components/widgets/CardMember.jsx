import React from "react";

function CardMember() {
  return (
    <div>
      <div className="relative group cursor-pointer flex items-center cursor-pointer pb-[10%]">
        <div className="social sm:translate-x-full  group-hover:translate-x-0 transition">
          <div className="">
            <div className="px-4 py-4 text-3xl border-gray-500 border-b-2 bg-black text-white hover:bg-main transition cursor-pointer">
              <i className="fa-brands fa-facebook"></i>
            </div>
            <div className="px-4 py-4 text-3xl border-gray-500 border-b-2 bg-black text-white hover:bg-main transition cursor-pointer">
              <i className="fa-brands fa-skype"></i>
            </div>
            <div className="px-4 py-4 text-3xl border-gray-500 border-b-2 bg-black text-white hover:bg-main transition cursor-pointer">
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="px-4 py-4 text-3xl border-gray-500 border-b-2 bg-black text-white hover:bg-main transition cursor-pointer">
              <i className="fa-brands fa-telegram"></i>
            </div>
          </div>
        </div>
        <div className="card-mem z-10">
          <div className="flex-row h-fulll  ">
            <img
              className=" object-cover"
              src="https://geniuscript.com/serity/assets/images/resources/team1.jpg"
              alt=""
            />
            <div className="px-[30px] py-[23px] bg-[#222] group-hover:bg-main transition">
              <h3 className="font-medium text-xl text-white mb-1">
                James Williams
              </h3>
              <h4 className="text-base text-main group-hover:text-white">
                Marketing Manager
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardMember;
