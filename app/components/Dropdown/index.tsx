"use client";

import { ReactElement, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { JSX } from "react/jsx-runtime";

interface IDropdownProps {
  children: React.ReactNode;
  openElement?: React.ReactNode;
  menuOrientation?: "left" | "right" | "middle";
}

const menuOrientationStrategy = {
  left: "self-start",
  right: "self-end",
  middle: "self-center",
};
export default function Dropdown({
  children,
  openElement,
  menuOrientation,
}: IDropdownProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col relative">
      {!openElement && (
        <div
          className="cursor-pointer w-full border border-text rounded-sm shadow flex justify-end px-2 py-1 "
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      )}
      {!!openElement && (
        <div
          className="w-fit h-fit cursor-pointer"
          onClick={() => setShow((prev) => !prev)}
        >
          {openElement}
        </div>
      )}
      <div
        className={`transition-all ease-in-out duration-500 absolute top-[100%]  space-y-4 overflow-hidden ${show ? "h-20" : "h-0"
          } ${menuOrientation ? menuOrientationStrategy[menuOrientation] : " "}`}
      >
        <div
          className={`flex flex-col space-y-4 line-clamp-1 shadow-lg  rounded-sm w-fit p-2 bg-background-light `}
          onClick={() => setShow(!show)}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
