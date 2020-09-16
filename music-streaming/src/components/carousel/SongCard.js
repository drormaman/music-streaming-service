import React, { useEffect, useState } from "react";

function SongCard(props) {
  const [artist, setArtist] = useState({});

  //   async function fetchArtist() {
  //     const artistResult = await fetch(`artist/${props.data.artist_id}`);
  //     const artistObj = await artistResult.json();
  //     setArtist(artistObj);
  //   }
  //   useEffect(() => fetchArtist(), []);

  useEffect(() => {
    (async () => {
      const artistResult = await fetch(`artist/${props.data.artist_id}`);
      const artistObj = await artistResult.json();
      setArtist(artistObj);
    })();
    console.log(window.innerWidth);
  }, [props.data]);
  console.log(props.data);

  useEffect(() => console.log(window.innerWidth), [window.innerWidth]);
  return (
    <li key={props.data.id}>
      <div className="song-details">
        <img
          src={artist.cover_img}
          className="carousel-img"
          alt="artist image"
        />
        <figcaption>
          <h4>{props.data.title}</h4>
          <span>{artist.name}</span>
        </figcaption>
      </div>
    </li>
  );
}

export default SongCard;
