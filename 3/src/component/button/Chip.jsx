import Clickable from './Clickable';
import Text from '../text/Text';

function Chip({children, selected, ...props}) {
	return <Clickable
		clickableType='chip'
		colorType={selected? 'selected' : 'default'}
		size={2}
		{...props}>
		<Text size="13px">{children}</Text>
	</Clickable>;
}

export default Chip;
