import styled, {css} from "styled-components";
import Card from "./Card";
import {useEffect, useState} from "react";
import Text from "../text/Text";

const ToastMessageCard = styled(Card)`
  ${props => props.messageColor};
  ${props => props.transitionPos};
  box-shadow: rgba(var(--toast-shadow-color, 0, 0, 3), 0.3) 0 0 8px ;
  color: var(--toast-color, var(--black-main));
  
  transition: 0.4s;
`;

const messageColorByType = {
  error: css`
    --toast-shadow-color: var(--destructive-color);
    --toast-color: rgba(var(--destructive-color), 1);
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
      const time = setTimeout(() => {
        setTransitionPos(unmountStyle);
      }, 2000);
      const unmountTime = setTimeout(() => {
        setToastState(false);
      }, 2400);
      
      return (() => {
        clearTimeout(time);
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