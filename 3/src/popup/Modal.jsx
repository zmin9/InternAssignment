import styled from "styled-components";
import Card from "../container/Card";


const Background = styled.div`
  z-index: 1;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Modal = ({children, background, onClick}) => {
  return (
    <>
      <Background background={background} onClick={onClick}/>
      <Card size='lg' position='center'>{children}</Card>
    </>
  );
};

export default Modal;