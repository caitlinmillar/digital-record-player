// src/components/Library.js
import React from 'react';
import Record from '../Record'; // Adjust path as necessary
import LibraryContainer from './index.styled'

const Library = ({ records }) => {
  return (
    <LibraryContainer>
      {records.map((record) => (
        <Record key={record.id} id={record.id} title={record.title} />
      ))}
    </LibraryContainer>
  );
};

export default Library;
