import styled from 'styled-components';
import Card from '../container/Card';
import PositionFixed from '../layout/PositionFixed';


const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Modal = ({children, background, onClick}) => (
	<>
		<PositionFixed center>
			<Background background={background} onClick={onClick}>hi</Background>
		</PositionFixed>
		<PositionFixed right="36px" left="36px" center>
			<Card size='lg'>{children}</Card>
		</PositionFixed>
	</>
);

export default Modal;
