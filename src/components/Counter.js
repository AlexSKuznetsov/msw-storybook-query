import { useContext } from 'react';
import { DataContext } from '../context/context';
import styled from 'styled-components';

const Button = styled.button`
  padding: 8px;
  background: blue;
  color: white;
  border: none;
  border-radius: 4px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const Counter = () => {
  const {
    state: { counter },
    increment,
  } = useContext(DataContext);

  return (
    <div>
      <Button onClick={increment}>increment counter</Button>
      <br />
      Counter: {counter}
    </div>
  );
};
