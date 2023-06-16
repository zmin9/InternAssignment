import React from 'react';
import styled from 'styled-components';
import Text from '../text/Text';

const BasicTextInput = styled.input`
  outline: 0;
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
  background-color: ${({ theme }) => theme.colors.bg.light};
  border-radius: 4px 4px 0 0;
  border-width: 0 0 2px;
  border-color: rgba(0, 0, 0, 0.3);

  &:focus {
    border-color: rgba(0, 0, 0, 0.8);
  }
`;

const TextInput = React.forwardRef(({placeholder, disabled}, ref) =>
	<Text size="14px" lineHeight="16.41px" weight="400">
		<BasicTextInput
			placeholder={placeholder}
			ref={ref}
			disabled={disabled}
		/>
	</Text>
);


export default TextInput;
