import styled from "styled-components";

const BasicButton = styled.button`
  width: ${props => props.fullWidth? "100%" : null };
  padding: calc(var(--spacing-2) - 1px) var(--spacing-2);
  border-radius: ${props => props.round? "9999px" : "4px" };
  
  transition: filter;
  transition-duration: 0.15s;
  
  &:active{
    filter: brightness(0.95);
  }
`;

const PrimaryButton = styled(BasicButton)`
  border: 0;
  background-color: var(--main-color);
  color: var(--bg-main-color);
`;

const SecondaryButton = styled(BasicButton)`
  border: ${props => props.outline? "solid 2px var(--main-color)" : "0"};
  background-color: var(--bg-main-color);
  color: var(--main-color);
`;

export { PrimaryButton, SecondaryButton };