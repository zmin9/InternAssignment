import BasicClickable from './BasicClickable';
import FlexBox from '../layout/FlexBox';
import Text from '../text/Text';

const Button = ({children, colorType, size, ...props}) =>
	<BasicClickable
		clickableType='button'
		colorType={colorType}
		size={size}
		{...props}
	>
		<Text size='15px' weight='600' lineHeight='18.15px'>
			{children}
		</Text>
	</BasicClickable>
;

const IconButton = ({children, colorType, size, label,...props}) =>
	<BasicClickable
		clickableType='button'
		colorType={colorType}
		size={size}
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
	</BasicClickable>
;


export { Button, IconButton };
