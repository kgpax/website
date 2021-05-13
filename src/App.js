import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #efefff;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 5vw;
  color: #222233;
  &:before {
    content: '<h1>';
    color: #ccccdd;
  }
  &:after {
    content: '</h1>';
    color: #ccccdd;
  }
`;

const App = () => (
  <Container>
    <Title>kevinpaxton.com</Title>
  </Container>
);

export default App;
