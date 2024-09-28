import styled from 'styled-components';

export const PlayerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  border: 2px solid #000;
  background-color: ${({ isOver }) => (isOver ? '#e0e0e0' : '#f9f9f9')};
`;

export const CurrentRecordTitle = styled.h2`
  margin: 10px 0;
  font-size: 1.5rem;
`;

export const ArtistName = styled.h3`
  margin: 5px 0;
  font-size: 1.2rem;
  color: #555;
`;

export const AlbumCover = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin: 15px 0;
`;

export const AudioPlayer = styled.audio`
  width: 100%;
  margin-top: 15px;
`;