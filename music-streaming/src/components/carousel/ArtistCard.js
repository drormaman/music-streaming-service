import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledCard = styled.li`
  width: 150px;
  padding: 16px;
  border-radius: 10px;
  text-align: center;
`;

const ArtistImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

function ArtistCard(props) {
  return (
    <StyledCard key={props.data.id}>
      <ArtistImg
        src={props.data.cover_img}
        className="carousel-img"
        alt="artist image"
      />
      <h4 className="card-title">{props.data.name}</h4>
    </StyledCard>
  );
}

export default ArtistCard;
