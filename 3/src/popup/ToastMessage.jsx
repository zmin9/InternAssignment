import styled, {css} from "styled-components";
import Card from "./Card";
import {useEffect, useState} from "react";
import Text from "../text/Text";

const ToastMessageCard = styled(Card)`
  ${props => props.messageColor};
  ${props => props.transitionPos};
  box-shadow: var(--toast-shadow-color, var(--black-light)) 0 0 8px ;
  color: var(--toast-color, var(--black-main));
  
  transition: 0.4s;
`;

const messageColorByType = {
  error: css`
    --toast-shadow-color: var(--destructive-color-45);
    --toast-color: var(--destructive-color-50);
  `,
}

const mountStyle = css`
  transform: translateY(20px);
  opacity: 0
`;
const unmountStyle = css`
  opacity: 0;
`;

const ToastMessage = ({children, type, setToastState}) => {
  const [transitionPos, setTransitionPos] = useState(mountStyle);
  
  useEffect(() => {
      setTransitionPos(null);
      const mountTime = setTimeout(() => {
        setTransitionPos(unmountStyle);
      }, 2500);
      const unmountTime = setTimeout(() => {
        setToastState(false);
      }, 2900);
      
      return (() => {
        clearTimeout(mountTime);
        clearTimeout(unmountTime);
      });
    }, []);
  
  return (
    <ToastMessageCard size="sm" position="bottom" messageColor={messageColorByType[type]} transitionPos={transitionPos}>
      <Text size="14px">{children}</Text>
    </ToastMessageCard>
  );
};


export default ToastMessage;