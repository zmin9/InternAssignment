import BasicClickable from './BasicClickable';
import Text from '../text/Text';

function Chip({children, selected, ...props}) {
	return <BasicClickable
		clickableType='chip'
		colorType={selected? 'selected' : 'default'}
		size={2}
		{...props}>
		<Text size="13px">{children}</Text>
	</BasicClickable>;
}

export default Chip;
