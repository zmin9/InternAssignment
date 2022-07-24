import styled, {css} from "styled-components";
import Typography from "../text/Typography";
import Stack from "../layout/Stack";

const BasicButton = styled.button`
  ${props => props.buttonType}
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

const buttonSize = {
  // default: lg var(--spacing-2);
  md: css`
    --button-padding: var(--spacing-1);
  `,
  sm: css`
    --button-padding: var(--spacing-0);
  `,
}

const buttonType = {
  // default: primary
  secondary: css`
    --button-bg-color: var(--bg-main-color);
    --button-color: var(--main-color);
  `,
  outline: css`
    --button-border: solid 2px var(--main-color);
    --button-bg-color: var(--bg-main-color);
    --button-color: var(--main-color);
  `,
};

const buttonPosition = {
  absoluteB: css`
    position: absolute;
    bottom: 40px;
  `,
  fixedRB: css`
    position: fixed;
    right: 16px;
    bottom: 40px;
  `
};

const Button = ({children, type, size, position, ...props}) =>
  <BasicButton
    buttonType={buttonType[type]}
    buttonSize={buttonSize[size]}
    buttonPosition={buttonPosition[position]}
    {...props}
  >
    <Typography type="button">
      {children}
    </Typography>
  </BasicButton>
;

const IconButton = ({children, type, size, position, label,...props}) =>
  <BasicButton
    buttonType={buttonType[type]}
    buttonSize={buttonSize[size]}
    buttonPosition={buttonPosition[position]}
    {...props}
  >
    {label?
      <Stack row alignCenter spacing={1}>
        {children}
        <Typography type="button"> {label} </Typography>
      </Stack>
      :
      children
    }
  </BasicButton>
;


export { Button, IconButton };