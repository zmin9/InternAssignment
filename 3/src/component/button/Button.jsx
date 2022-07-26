import {css} from "styled-components";
import BasicButton from "./BasicButton";
import Typography from "../text/Typography";
import Stack from "../layout/Stack";


const buttonSize = {
  // default: lg var(--spacing-2);
  md: css`
    --button-padding: var(--spacing-1);
  `,
  sm: css`
    --button-padding: var(--spacing-0);
  `,
}

const buttonStyleByType = {
  // default: primary
  secondary: css`
    --button-bg-color: var(--bg-main-color);
    --button-color: var(--main-color-50);
  `,
  outline: css`
    --button-border: solid 2px var(--main-color-50);
    --button-bg-color: var(--bg-main-color);
    --button-color: var(--main-color-50);
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
    buttonStyle={buttonStyleByType[type]}
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
    buttonStyle={buttonStyleByType[type]}
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