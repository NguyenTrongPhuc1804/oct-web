import React from "react";

function CardReview() {
  return (
    <div className="sm:pb-[5%] pb-[7%] pt-[2%] group px-6">
      <div className="relative counter-shadow rounded-xl sm:px-[57px] px-[20px] py-[40px]">
        <div className="flex sm:flex-row-reverse sm:justify-between flex-col ">
          <img
            className=" group-hover:translate-x-[50%]  sm:scale-100 w-[130px] h-[130px]  group-hover:scale-110 transition"
            src="https://geniuscript.com/serity/assets/images/resources/auth2.jpg"
            alt=""
          />
          <div className="w-full">
            <h3 className="sm:text-2xl text-xl  mb-[7px] font-semibold">
              Charles Sarah
            </h3>
            <h3 className="sm:text-base text-xs mb-[7px] ">
              UX & Product Develper
            </h3>
            <ul className="flex text-main mb-[15px] w-[25%] justify-between">
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
            </ul>
          </div>
        </div>
        <h2 className="text-base leading-[30px] line-clamp-3">
          We’re on a mission to start a conversation with your customers in this
          fast connected world. Let’s discover, build and grow your digital
          business.
        </h2>
      </div>
    </div>
  );
}

export default CardReview;
