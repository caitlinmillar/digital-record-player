import styled from 'styled-components';

export const StackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RecordContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: 2px solid #ccc;
padding: 20px;
margin: 10px;
width: 200px;
height: 200px;
opacity: ${({ isDragging }) => (isDragging ? 0.5 : 1)};
background: ${({ isDragging }) => (isDragging ? '#ccc' : '#fff')};
`;

export const Button = styled.button`
  margin: 5px;
  padding: 5px 10px;
`;

export const ArrowButton = styled.button`
  margin: 10px;
  padding: 5px 10px;
  cursor: pointer;
`;

export const Record = styled.div`
  background-color: #f1f1f1;
  padding: 10px;
  cursor: pointer;
`;