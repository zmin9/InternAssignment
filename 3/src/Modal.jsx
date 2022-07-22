import styled from "styled-components";

const WhiteBox = styled.div`
  z-index: 2;
  position: absolute;
  inset: auto 36px;
  padding: 16px 19px;
  background-color: var(--bg-main-color);
  border-radius: 8px;
  text-align: center;
  
  margin: ${props => props.vertical === 'center'? '50% 0'
                        : props.vertical === 'bottom'? '80% 0'
                            : '20% 0'
          };
`;

const Background = styled.div`
  z-index: 1;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Modal = ({children, background, verticalAlign, onClick}) => {
  return (
    <>
      <Background background={background} onClick={onClick}/>
      <WhiteBox vertical={verticalAlign}>{children}</WhiteBox>
    </>
  );
};

export default Modal;