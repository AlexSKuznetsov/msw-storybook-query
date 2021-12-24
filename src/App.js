import { useRef } from 'react';
import styled from 'styled-components';
import { Counter } from './components/Counter';
import { ApiData } from './components/ApiData';

const Wrapper = styled.div`
  width: 800px;
  margin: 0 auto;
`;

const RenderContainer = styled.p`
  background-color: gray;
  color: white;
  padding: 20px;
  font-size: 20px;
`;

const DataContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const App = () => {
  const renderCount = useRef(0);
  renderCount.current++;

  return (
    <Wrapper>
      <RenderContainer>Render count: {renderCount.current}</RenderContainer>
      <DataContainer>
        <Counter />
        <ApiData />
      </DataContainer>
    </Wrapper>
  );
};

export default App;
