import Card from '../container/Card';
import PositionFixed from '../layout/PositionFixed';

const Modal = ({children}) => (
	<PositionFixed right="36px" left="36px" center>
		<Card>{children}</Card>
	</PositionFixed>
);

export default Modal;
