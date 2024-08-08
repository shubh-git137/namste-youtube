import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_SUGGESTION } from "../utils/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faMagnifyingGlass,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSuggestion([]);
      return;
    }

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API-Call - ",searchQuery)
    try {
      const response = await fetch(
        `${YOUTUBE_SEARCH_SUGGESTION}${searchQuery}`
      );
      const json = await response.json();
      setSuggestion(json[1]);
      dispatch(cacheResults({ [searchQuery]: json[1] }));
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };

  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-md">
      <div className="flex gap-1 col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-6 cursor-pointer me-3"
          alt="hamburger"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
        />
        <a href="/">
          <img
            className="h-6"
            alt="youtube logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          />
        </a>
      </div>
      <div className="col-span-10 ml-20 relative">
        <input
          type="text"
          placeholder="Search"
          className="rounded-l-3xl w-[60%] border border-gray-400 p-2 px-5"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
        />
        <button
          className="rounded-r-3xl border border-gray-400 p-2"
          type="button"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        {showSuggestions && suggestion.length > 0 && (
          <div className="absolute w-[60%] bg-white py-2 px-2 shadow-lg rounded-xl border border-gray-100 mt-1">
            <ul>
              {suggestion.map((item) => (
                <li
                  key={item}
                  className="shadow-sm py-2 px-2 hover:bg-gray-100"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="me-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <FontAwesomeIcon icon={faUserCircle} className="h-8" />
      </div>
    </div>
  );
};

export default Header;
