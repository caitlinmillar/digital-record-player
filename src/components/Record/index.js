import React from 'react';
import { useDrag } from 'react-dnd';
import { RecordContainer } from './index.styled';

const Record = ({ id, title }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'record', 
    item: { id, title },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <RecordContainer 
      ref={drag} 
      dragging={isDragging ? 'true' : undefined}
    >
      {title}
    </RecordContainer>
  );
};

export default Record;
