DROP DATABASE IF EXISTS `music_streaming`;
CREATE DATABASE `music_streaming`; 
USE `music_streaming`;

SET NAMES utf8mb4 ;
SET character_set_client = utf8mb4 ;

DROP TABLE IF EXISTS artist;
CREATE TABLE artist(
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    cover_img TEXT,
    uploaded_at DATE,
    PRIMARY KEY(id)
);

DROP TABLE IF EXISTS album;
CREATE TABLE album(
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    artist_id INT,
    cover_img TEXT,
    created_at DATE,
    uploaded_at DATE,
    PRIMARY KEY(id),
	FOREIGN KEY (artist_id) REFERENCES artist(id)
);

DROP TABLE IF EXISTS song;
CREATE TABLE song(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    album_id INT NOT NULL,
	artist_id INT NOT NULL,
    youtube_link TEXT,
    duration INT NOT NULL,
    track_number INT,
    lyrics TEXT,
    created_at DATE,
    uploaded_at DATE,
    PRIMARY KEY (id),
	FOREIGN KEY (artist_id) REFERENCES artist(id),
	FOREIGN KEY (album_id) REFERENCES album(id)
);

CREATE TABLE playlist(
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    cover_img TEXT,
    uploaded_at DATE,
	created_at DATE,
    PRIMARY KEY(id)
);

CREATE TABLE user(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255),
	email VARCHAR(255),
    password VARCHAR(255),
    uploaded_at DATE,
	created_at DATE,
    is_admin TINYINT,
    remember_token VARCHAR(255),
    preferences TEXT,
	PRIMARY KEY(id)
);

CREATE TABLE songs_in_playlist(
	id INT NOT NULL AUTO_INCREMENT,
	song_id INT NOT NULL,
    playlist_id INT NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (song_id) REFERENCES song(id),
	FOREIGN KEY (playlist_id) REFERENCES playlist(id)
);

CREATE TABLE interactions(
	id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    song_id INT NOT NULL,
    is_liked TINYINT,
    play_count INT,
    created_at DATE,
	PRIMARY KEY(id),
	FOREIGN KEY (user_id) REFERENCES user(id),
	FOREIGN KEY (song_id) REFERENCES song(id)
);