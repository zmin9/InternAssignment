import styled from "styled-components";
import MainPage from "./mainPage/MainPage";

const WrapPaddingBox = styled.div`
  padding: 0 var(--spacing-2);
`;

function App() {
  return (
    <WrapPaddingBox>
        <MainPage/>
    </WrapPaddingBox>
  );
}

export default App;
