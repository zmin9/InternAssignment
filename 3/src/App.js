import styled from "styled-components";
import MainPage from "./mainPage/MainPage";

const WrapPaddingBox = styled.div`
  min-height: 100vh;
  padding: 0 var(--spacing-2);
  background-color: var(--bg-main-color);
`;

function App() {
  return (
    <WrapPaddingBox>
        <MainPage/>
    </WrapPaddingBox>
  );
}

export default App;
