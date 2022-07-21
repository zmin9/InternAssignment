import styled from "styled-components";
import MainPage from "./mainPage/MainPage";
import AddPage from "./addPage/AddPage";

const WrapPaddingBox = styled.div`
  position: relative;
  min-height: 100vh;
  margin: 0 var(--spacing-2);
`;

function App() {
  return (
    <WrapPaddingBox>
      <MainPage />
      {/*<AddPage />*/}
    </WrapPaddingBox>
  );
}

export default App;
