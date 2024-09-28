import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { PlayerContainer, CurrentRecordTitle, AlbumCover, ArtistName, AudioPlayer } from './index.styled';

const RecordPlayer = () => {
  const [currentRecord, setCurrentRecord] = useState(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'record',
    drop: (item) => {
      setCurrentRecord(item); 
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <PlayerContainer ref={drop} isOver={isOver}>
      {currentRecord ? (
        <>
          <CurrentRecordTitle>{currentRecord.title}</CurrentRecordTitle>

          {currentRecord.artist && <ArtistName>{currentRecord.artist}</ArtistName>}

          {currentRecord.cover ? (
            <AlbumCover src={currentRecord.cover} alt={currentRecord.title} />
          ) : (
            <AlbumCover src="https://via.placeholder.com/150" alt="No cover available" />
          )}

          {/* {currentRecord.audio ? (
            <AudioPlayer controls src={currentRecord.audio}>
              Your browser does not support the audio element.
            </AudioPlayer>
          ) : (
            <p>No audio available for this record.</p>
          )} */}
        </>
      ) : (
        <CurrentRecordTitle>Drop a Record Here</CurrentRecordTitle>
      )}
    </PlayerContainer>
  );
};

export default RecordPlayer;
