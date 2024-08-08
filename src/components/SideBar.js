import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { faFilm, faHouse, faSubscript } from "@fortawesome/free-solid-svg-icons";
const SideBar = () => {
  const handleMenu = useSelector((store) => store.app.isMenuOpen);
  if (!handleMenu) return null;
  return (
    <div className="p-5 shadow-lg w-60 mr-2">
      <ul>
        <li className="cursor-pointer hover:bg-gray-200 py-2 rounded-lg px-2">
          <FontAwesomeIcon icon={faHouse} className="me-2" />
          <Link to={"/"}>Home</Link>
        </li>
        <li className="cursor-pointer hover:bg-gray-200 py-2 rounded-lg px-2">
          <FontAwesomeIcon icon={faFilm} className="me-2" /> Shorts
        </li>
        <li className="cursor-pointer hover:bg-gray-200 py-2 rounded-lg px-2">
        <FontAwesomeIcon icon={faSubscript} className="me-2" /> Subscriptions
        </li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li className="cursor-pointer hover:bg-gray-200 py-2 rounded-lg px-2">
          Music
        </li>
        <li className="cursor-pointer hover:bg-gray-200 py-2 rounded-lg px-2">
          Sports
        </li>
        <li className="cursor-pointer hover:bg-gray-200 py-2 rounded-lg px-2">
          Gaming
        </li>
        <li className="cursor-pointer hover:bg-gray-200 py-2 rounded-lg px-2">
          Movies
        </li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li className="cursor-pointer hover:bg-gray-200 py-2 rounded-lg px-2">
          Music
        </li>
        <li className="cursor-pointer hover:bg-gray-200 py-2 rounded-lg px-2">
          Sports
        </li>
        <li className="cursor-pointer hover:bg-gray-200 py-2 rounded-lg px-2">
          Gaming
        </li>
        <li className="cursor-pointer hover:bg-gray-200 py-2 rounded-lg px-2">
          Movies
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
