import styled from 'styled-components';
import PositionFixed from '../layout/PositionFixed';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

const BackgroundForPopup = ({onClick}) =>
	<PositionFixed center>
		<Background onClick={onClick} />
	</PositionFixed>
;

export default BackgroundForPopup;
