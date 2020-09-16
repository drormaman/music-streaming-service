import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";
import SongCard from "./SongCard";
import ArtistCard from "./ArtistCard";
import AlbumCard from "./AlbumCard";
// import PlaylistCard from "./PlaylistCard";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const styledUl = styled.ul`
  width: 100%;
  height: 200px;
  margin: 0;
  padding: 0;
  display: inline-flex;
  justify-content: space-evenly;
  list-style: none;
`;

function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const numberOfItemsInRow = Math.floor(windowWidth / 190);

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
      {currentIndex > 0 && <LeftArrow click={leftArrowClick} />}
      <TransitionGroup component={styledUl}>
        {props.data
          .slice(currentIndex, currentIndex + numberOfItemsInRow)
          .map((item) => {
            let component;
            switch (props.type) {
              case "songs":
                component = <SongCard data={item} />;
                break;
              case "artists":
                component = <ArtistCard data={item} />;
                break;
              case "albums":
                component = <AlbumCard data={item} />;
                break;
            }
            return (
              <CSSTransition key={item.id} timeout={500} classNames="slide">
                {component}
              </CSSTransition>
            );
          })}
      </TransitionGroup>
      {currentIndex + numberOfItemsInRow < props.data.length && (
        <RightArrow click={rightArrowClick} />
      )}
    </div>
  );
}
export default Carousel;
