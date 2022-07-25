import styled from "styled-components";

const BasicButton = styled.button`
  ${props => props.buttonStyle}
  ${props => props.buttonSize}
  ${props => props.buttonPosition}

  border: var(--button-border, 0);
  background-color: var(--button-bg-color, var(--main-color));
  color: var(--button-color, var(--bg-main-color));
  padding: var(--button-padding, var(--spacing-2));
  width: ${props => props.fullWidth && "calc(100% - 2 * var(--spacing-2))"};
  border-radius: ${props => props.round? "9999px" : "4px" };
  line-height: 0;
  
  transition: filter;
  transition-duration: 0.2s;
  
  :active {
    filter: brightness(0.9);
  }
`;

export default BasicButton;