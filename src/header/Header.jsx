import React, { useState } from "react";
import "./Header.style.css";
import {
  IoBedSharp,
  IoAirplane,
  IoCardSharp,
  IoBusSharp,
} from "react-icons/io5";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
// passing the  type props from pages/search
const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [optionOpen, setOptionOpen] = useState(false);
  const [option, setOption] = useState({ adult: 2, children: 0, room: 1 });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  // handle click
  const handleClick = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };

  return (
    <div className="head">
      <div className="header">
        {/* we can set the margin using conditionallt like className={type=='searh' "header content" :"header"} */}
        {/* header.content{margin:reducedas per you need else it will be as alreay} */}
        <header className="header-list">
          <div className="header-items">
            <span className="header-name active">
              <IoBedSharp />
              <span className="text">stays</span>
            </span>
          </div>
          <div className="header-items">
            <span className="header-name">
              <IoAirplane />
              <span className="text">flights</span>
            </span>
          </div>
          <div className="header-items">
            <span className="header-name">
              <IoCardSharp />
              <span className="text">car rentals</span>
            </span>
          </div>
          <div className="header-items">
            <span className="header-name">
              <IoBedSharp />
              <span className="text">Attraction</span>
            </span>
          </div>
          <div className="header-items">
            <span className="header-name">
              <IoBusSharp />
              <span className="text">Airport taxis</span>
            </span>
          </div>
        </header>

        {/* find your section */}
        {/* we are using conditional if type==='search' then it will be shown else it will not be shown in search page */}
        {type !== "search" && (
          <>
            <div className="find-destination">
              <div className="destination-title">
                <h1>Find your next stay</h1>
                <p>search deals on hotels,homes and much more ...</p>
              </div>
            </div>

            {/* search bar to display absolute so that we can insert into center */}
            <div className="search-option">
              <div className="search-container">
                <div className="input">
                  <input
                    type="text"
                    className="input-text"
                    placeholder="where are your going ?"
                  />
                </div>
                <div className="input date">
                  <span
                    className="date"
                    onClick={() => {
                      setOpenDate(!openDate);
                    }}
                  >
                    check-in check-out
                  </span>
                  {/* open whhen it is clicked */}
                  {openDate && (
                    <DateRange
                      className="date-range"
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                    />
                  )}
                </div>
                <div className="input">
                  <span
                    onClick={() => {
                      setOptionOpen(!optionOpen);
                    }}
                  >
                    {/* 2 adutls 0 children <span>1 room</span> */}
                    <span>{`${option.adult} adult . ${option.children} children . ${option.room} room `}</span>
                  </span>
                  {/* shows when it is clicked */}
                  {optionOpen && (
                    <div className="options">
                      <div className="option-items">
                        <span className="option-text">adult</span>
                        <div className="button-section">
                          <button
                            disabled={option?.adult <= 0}
                            className="option-decrement"
                            onClick={() => {
                              handleClick("adult", "d");
                            }}
                          >
                            -
                          </button>
                          <span className="option-value">{option?.adult}</span>
                          <button
                            className="option-increment"
                            onClick={() => {
                              handleClick("adult", "i");
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="option-items">
                        <span className="option-text">children</span>
                        <div className="button-section">
                          <button
                            disabled={option?.children <= 0}
                            className="option-decrement"
                            onClick={() => {
                              handleClick("children", "d");
                            }}
                          >
                            -
                          </button>
                          <span className="option-value">
                            {option?.children}
                          </span>
                          <button
                            className="option-increment"
                            onClick={() => {
                              handleClick("children", "i");
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="option-items">
                        <span className="option-text">Room</span>
                        <div className="button-section">
                          <button
                            disabled={option?.room <= 0}
                            className="option-decrment"
                            onClick={() => {
                              handleClick("room", "d");
                            }}
                          >
                            -
                          </button>
                          <span className="option-value">{option?.room}</span>
                          <button
                            className="option-increment"
                            onClick={() => {
                              handleClick("room", "i");
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      {/* completed children */}
                    </div>
                  )}
                </div>
                <div className="input button">
                  <button>search</button>
                </div>
              </div>
            </div>
          </>
        )}
        {/* end of our conditional */}
      </div>
    </div>
  );
};

export default Header;
