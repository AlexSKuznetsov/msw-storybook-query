import { useContext } from 'react';
import { DataContext } from '../context/context';
import styled from 'styled-components';

const Button = styled.button`
  padding: 8px;
  background: black;
  color: white;
  border: none;
  border-radius: 4px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const ApiData = () => {
  const {
    state: { data },
    refetchData,
    isFetching,
  } = useContext(DataContext);

  return (
    <div>
      <Button onClick={refetchData}>Refetch data</Button>
      {isFetching && <p>Loading data ...</p>}
      {data?.map((el) => (
        <div key={el.id}>{el.title}</div>
      ))}
    </div>
  );
};
