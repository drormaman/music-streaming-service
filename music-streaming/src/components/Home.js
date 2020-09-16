import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "./carousel/Carousel";

function Home() {
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetchSongs();
    fetchArtists();
    fetchAlbums();
    fetchAlbums();
  }, []);

  async function fetchSongs() {
    const data = await fetch("/top_songs");
    const songsArr = await data.json();
    setSongs(songsArr);
  }

  async function fetchArtists() {
    const data = await fetch("/top_artists");
    const artistsArr = await data.json();
    setArtists(artistsArr);
  }

  async function fetchAlbums() {
    const data = await fetch("/top_albums");
    const albumsArr = await data.json();
    setAlbums(albumsArr);
  }

  async function fetchPlaylists() {
    const data = await fetch("/top_playlists");
    const playlistsArr = await data.json();
    setPlaylists(playlistsArr);
  }
  console.log(albums);
  return (
    <div id="home">
      <Carousel data={songs} type="songs" />
      <Carousel data={artists} type="artists" />
      <Carousel data={albums} type="albums" />
      {/* <Carousel data={playlists} type="playlists" /> */}
    </div>
  );
}

export default Home;
