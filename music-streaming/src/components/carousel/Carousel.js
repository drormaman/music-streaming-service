import React, { useEffect, useState } from "react";
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";
import SongCard from "./SongCard";

function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const numberOfItemsInRow = Math.floor(windowWidth / 190);
  console.log(windowWidth);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  function rightArrowClick() {
    setCurrentIndex(() =>
      currentIndex === props.data.length - numberOfItemsInRow
        ? 0
        : currentIndex + 1
    );
  }
  function leftArrowClick() {
    setCurrentIndex(() =>
      currentIndex === 0
        ? props.data.length - numberOfItemsInRow
        : currentIndex - 1
    );
  }

  return (
    <div className="carousel-row">
      <LeftArrow click={leftArrowClick} />
      <ul className="carousel-ul">
        {props.data
          .slice(currentIndex, currentIndex + numberOfItemsInRow)
          .map((item) => {
            return <SongCard data={item} />;
          })}
      </ul>
      <RightArrow click={rightArrowClick} />
    </div>
  );
}
export default Carousel;
