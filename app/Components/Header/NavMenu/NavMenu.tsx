import React from "react";
import Link from "next/link";
import "./NavMenu.css";

export const NavMenu = () => {
  return (
    <nav>
      <div className="nav_menu">
        <ul className="nav_menu_list">
          <li className="nav_menu_item">
            <Link href={"/movies/list"}>Movies</Link>
          </li>
          <li className="nav_menu_item">
            <Link href={"/serials"}>Serials</Link>
          </li>
          <li className="nav_menu_item">
            <Link href={"/todolist"}>Todolist</Link>
          </li>
          <li className="nav_menu_item">
            <Link href={"/singin"}>singin</Link>
          </li>
          <li className="nav_menu_item">
            <Link href={"/singout"}>singout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
