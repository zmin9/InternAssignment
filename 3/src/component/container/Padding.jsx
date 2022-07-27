import styled from 'styled-components';

const PaddingBox = styled.div`
  padding: ${({top, right, bottom, left}) => `${top} ${right} ${bottom} ${left}`};
`;

const Padding = ({top, right, bottom, left, side, children}) => {
	return <PaddingBox
		top={top || 0}
		right={right || side || 0}
		bottom={bottom || 0}
		left={left || side || 0}
	>
		{children}
	</PaddingBox>;
};

export default Padding;
