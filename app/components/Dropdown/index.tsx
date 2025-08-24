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
        className={`transition-all duration-200 absolute top-[100%] space-y-4 p-2 border border-text rounded-sm w-fit  ${
          show ? "hidden" : "flex flex-col"
        } ${menuOrientation ? menuOrientationStrategy[menuOrientation] : " "}`}
      >
        <div
          className={`flex flex-col space-y-4 line-clamp-1 ${show}`}
          onClick={() => setShow(!show)}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
