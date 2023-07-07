import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
// import logo from "../../../";
function Header1() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize) => {
    onOpen();
  };
  return (
    <div className="wrapper ">
      <div className="desktop hidden lg:block">
        <div className="flex items-center justify-around m-auto w-[90%] ">
          <div className="logo flex items-center">
            <img
              className="w-[170px] h-[55px] object-contain"
              src="/public/icons/Logo-oct.png"
              alt=""
            />
          </div>
          <div className="nav mr-4">
            <ul className="flex">
              <li className="px-[24px] hover:text-[#f7941d]  transition cursor-pointer py-[50px] text-base font-[700]">
                <a className="border-[#f7941d] border-b-[3px] pb-2" href="">
                  Home
                </a>
              </li>
              <li className="px-[24px] hover:text-[#f7941d]  transition cursor-pointer py-[50px] text-base font-[700]">
                <a className="" href="">
                  Home
                </a>
              </li>
              <li className="px-[24px] hover:text-[#f7941d]  transition cursor-pointer py-[50px] text-base font-[700]">
                <a className="" href="">
                  Home
                </a>
              </li>
              <li className="px-[24px] hover:text-[#f7941d]  transition cursor-pointer py-[50px] text-base font-[700]">
                <a className="" href="">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <div className="search flex items-center justify-between">
            <div className="w-9 h-9 relative flex items-center justify-center mr-6">
              <i className="text-lg after:absolute after:border-2 after:border-[#f7941d] text-[#f7941d] after:w-full after:h-full after:rotate-45 after:z-0 after:tra after:border-red-800  after:contents-['asd'] after:inset-0 text-sm   fa-solid fa-magnifying-glass"></i>
            </div>
            <div className=" mr-6">
              <i className="text-lg fa-solid fa-cart-shopping text-[#f7941d]"></i>
            </div>
            <button className="hover:bg-[#f7941d] transition hover:text-gray-50 hover:border-none text-base font-semibold leading-[50px] rounded-[30px] border-2 px-5 border-[#777777]">
              GET A QUOTE
            </button>
          </div>
        </div>
      </div>

      <div className="mobile-nav  lg:hidden block">
        <div className="flex flex-row-reverse justify-between">
          <div className="">
            <IconButton
              icon={<HamburgerIcon />}
              onClick={() => handleClick()}
              m={4}
            >{`Open Drawer`}</IconButton>
          </div>
          <div className="logo flex items-center">
            <img
              className="w-[170px] h-[55px] object-contain"
              src="/public/icons/Logo-oct.png"
              alt=""
            />
          </div>
        </div>
        <Drawer
          placement={"left"}
          onClose={onClose}
          isOpen={isOpen}
          size={"xs"}
        >
          <DrawerOverlay />
          <DrawerContent>
            {/* <DrawerCloseButton /> */}
            <DrawerBody>
              <ul className="">
                <li className=" border-b-2   py-[20px] hover:text-[#f7941d]  transition cursor-pointer  text-base font-[700]">
                  <a className="" href="">
                    Home
                  </a>
                </li>
                <li className=" border-b-2   py-[20px] hover:text-[#f7941d]  transition cursor-pointer  text-base font-[700]">
                  <a className="" href="">
                    Home
                  </a>
                </li>
                <li className=" border-b-2   py-[20px] hover:text-[#f7941d]  transition cursor-pointer  text-base font-[700]">
                  <a className="" href="">
                    Home
                  </a>
                </li>
                <li className=" border-b-2   py-[20px] hover:text-[#f7941d]  transition cursor-pointer  text-base font-[700]">
                  <a className="" href="">
                    Home
                  </a>
                </li>
              </ul>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

export default Header1;
