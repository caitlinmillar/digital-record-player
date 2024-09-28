import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { StackContainer, ArrowButton, Record, RecordContainer } from './index.styled';

const RecordStack = ({ records }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentRecord = records && records[currentIndex] ? records[currentIndex] : null;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'record',
    item: {currentRecord},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const handleNext = () => {
    if (currentIndex < records.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  if (!records || records.length === 0) {
    return <p>No records available</p>; 
  }

  return (
    <StackContainer>
      <ArrowButton onClick={handlePrev} disabled={currentIndex === 0}>
        Prev
      </ArrowButton>

      {currentRecord && (
        <RecordContainer ref={drag} isDragging={isDragging} >
          <Record>{currentRecord.title || 'Unknown Title'}</Record>
        </RecordContainer>
      )}

      <ArrowButton onClick={handleNext} disabled={currentIndex === records.length - 1}>
        Next
      </ArrowButton>
    </StackContainer>
  );
};

export default RecordStack;
