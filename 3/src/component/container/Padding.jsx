import styled from 'styled-components';

const PaddingBox = styled.div`
  padding: ${({ top, right, bottom, left }) => `${top} ${right} ${bottom} ${left}`};
`;

const Padding = ({ top, right, bottom, left, side, children }) => {
	const t = top === undefined? 0 : top;
	const b = bottom === undefined? 0 : bottom;
	const r = right === undefined? (side === undefined? 0: side) : right;
	const l = left === undefined? (side === undefined? 0: side) : left;
	return (
		<PaddingBox
			top={t}
			right={r}
			bottom={b}
			left={l}
		>
			{children}
		</PaddingBox>
	);
};

export default Padding;
