import React from "react";
import { NavMenu } from "./NavMenu/NavMenu";
import "./Header.css";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="header_container">
      <Link href={"/"}>
        <Image
          className="header_logo"
          width={70}
          height={70}
          src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
          alt="logo"
        />
      </Link>
      <NavMenu />
    </div>
  );
};
