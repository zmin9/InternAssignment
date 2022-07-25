import {css} from "styled-components";
import BasicButton from "./BasicButton";

const selectedChipStyle = css`
  --button-bg-color: rgba(18, 148, 242, 0.15);
  --button-color: var(--main-color);
`;

const defaultChipStyle = css`
  --button-bg-color: var(--bg-sub-color);
  --button-color: var(--black-main);
`;

const Chip = ({children, selected, color, ...props}) =>
  <BasicButton
    buttonStyle={selected? selectedChipStyle : defaultChipStyle} size="md" {...props}>
    {children}
  </BasicButton>
;

export default Chip;