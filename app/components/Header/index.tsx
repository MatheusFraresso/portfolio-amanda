import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Button from "../Button";
import Link from "next/link";
import Dropdown from "../Dropdown";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineMenu } from "react-icons/md";

export default function Header() {
  return (
    <div className="px-2 lg:px-10 py-2 flex justify-between items-center sticky w-full">
      <h1 className="text-3xl lg:text-[50px] font-normal font-inria">Bonart</h1>
      <div className="flex items-center">
        <div className="hidden lg:flex w-full  items-center justify-center space-x-5 text-lg">
          <Button outline className="border-text text-text ">
            <a href="">Portfólio</a>
          </Button>
          <Button outline className="border-text text-text">
            <a href="">Quero um projeto</a>
          </Button>
        </div>
        <div className="flex lg:hidden  items-center justify-center space-x-2  lg:space-x-6 text-xs lg:text-xl">
          <Dropdown
            openElement={<MdOutlineMenu size={20} />}
            menuOrientation="middle"
          >
            <Button className="border-text text-text text-xs">
              <a href="">Portfólio</a>
            </Button>
            <Button className="border-text text-text text-xs">
              <a href="" className="line-clamp-1 whitespace-nowrap">
                Quero um projeto
              </a>
            </Button>
          </Dropdown>
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <Link href={"https://www.linkedin.com/in/amanda-bonato/"}>
          <FaLinkedin className=" text-xl xl:text-3xl" />
        </Link>
        <Link href={"https://www.instagram.com/amanda.bonato/"}>
          <FaInstagram className=" text-xl xl:text-3xl" />
        </Link>
      </div>
    </div>
  );
}
