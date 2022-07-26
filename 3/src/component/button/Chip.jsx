import {css} from "styled-components";
import BasicButton from "./BasicButton";
import Text from "../text/Text";

const selectedChipStyle = css`
  --button-bg-color: var(--main-color-90);
  --button-color: var(--main-color-50);
`;

const defaultChipStyle = css`
  --button-bg-color: var(--bg-sub-color);
  --button-color: var(--black-main);
`;

const Chip = ({children, selected, ...props}) =>
  <BasicButton
    buttonStyle={selected? selectedChipStyle : defaultChipStyle}
    buttonSize={ css`--button-padding: 12px;` }
    {...props}>
    <Text size="13px">{children}</Text>
  </BasicButton>
;

export default Chip;