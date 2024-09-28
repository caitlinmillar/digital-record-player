import styled from 'styled-components';

export const RecordContainer = styled.div`
  width: 100px;
  height: 100px;
  border: 2px solid #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  background: ${({ dragging }) => (dragging ? '#ccc' : '#fff')};
  opacity: ${({ dragging }) => (dragging ? 0.5 : 1)};
`;