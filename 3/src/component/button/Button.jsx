import {css} from 'styled-components';
import BasicButton from './BasicButton';
import FlexBox from '../layout/FlexBox';
import Text from '../text/Text';


const buttonSize = {
	// default: lg var(--spacing-2);
	md: css`
    --button-padding: var(--spacing-1);
  `,
	sm: css`
    --button-padding: var(--spacing-0);
  `,
};

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

const Button = ({children, type, size, ...props}) =>
	<BasicButton
		buttonStyle={buttonStyleByType[type]}
		buttonSize={buttonSize[size]}
		{...props}
	>
		<Text size='15px' weight='600' lineHeight='18.15px'>
			{children}
		</Text>
	</BasicButton>
;

const IconButton = ({children, type, size, label,...props}) =>
	<BasicButton
		buttonStyle={buttonStyleByType[type]}
		buttonSize={buttonSize[size]}
		{...props}
	>
		{label?
			<FlexBox row alignCenter spacing={1}>
				{children}
				<Text size='15px' weight='600' lineHeight='18.15px'> {label} </Text>
			</FlexBox>
			:
			children
		}
	</BasicButton>
;


export { Button, IconButton };
