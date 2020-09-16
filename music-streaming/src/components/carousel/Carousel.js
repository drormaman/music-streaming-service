import React, { useEffect, useState } from "react";
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";
import SongCard from "./SongCard";

function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const numberOfItemsInRow = Math.floor((windowWidth - 100) / 200);
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
    <div>
      <ul
        className="carousel-ul"
        style={{
          gridTemplateColumns: `50px repeat(${numberOfItemsInRow}, minmax(175px, 1fr)) 50px`,
        }}
      >
        <LeftArrow click={leftArrowClick} />
        {props.data
          .slice(currentIndex, currentIndex + numberOfItemsInRow)
          .map((item) => {
            return <SongCard data={item} />;
          })}
        <RightArrow click={rightArrowClick} />
      </ul>
    </div>
  );
}
export default Carousel;
