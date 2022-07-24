import styled from "styled-components";
import Text from "../text/Text";
import React from "react";

const BasicTextInput = styled.input`
  outline: 0;
  width: 100%;
  padding: 16px 20px;
  background-color: var(--bg-sub-color);
  border-radius: 4px 4px 0 0;
  border-width: 0 0 2px;
  border-color: rgba(0, 0, 0, 0.3);
  
  &:focus {
    border-color: rgba(0, 0, 0, 0.8);
  }
`;

const TextInput = React.forwardRef(({placeholder, onChange, value}, ref) =>
  <Text size="14px" lineHeight="16.41px" weight="400">
    <BasicTextInput placeholder={placeholder} onChange={(e)=>onChange(e.target.value)} value={value} ref={ref}/>
  </Text>
);


export default TextInput;