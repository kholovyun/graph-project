import React from "react";
import Link from "next/link";
import { FaSignOutAlt  } from "react-icons/fa";
import "./NavMenu.css";

export const NavMenu = () => {
  return (
      <div className="nav_menu">
        <ul className="nav_menu_list">
          <li className="nav_menu_item">
            <Link href={"/movies/list"}>MOVIES</Link>
          </li>
          <li className="nav_menu_item">
            <Link href={"/serials"}>SERIALS</Link>
          </li>
          <li className="nav_menu_item">
            <Link href={"/todolist"}>TODOLIST</Link>
          </li>
          <li className="nav_menu_item">
            <Link href={"/singin"}>SINGIN</Link>
          </li>
          <li className="nav_menu_item">
            <Link href={"/singout"}><FaSignOutAlt/></Link>
          </li>
        </ul>
      </div>
  );
};
