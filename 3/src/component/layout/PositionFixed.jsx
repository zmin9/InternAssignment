import styled from 'styled-components';

const Fixed = styled.div`
	position: fixed;
	z-index: 2;
	${ props => `
		right: ${props.r};
		left: ${props.l};
	`}

  ${ props => props.center?
		`
			top: 50%;
			transform: translate(0, -50%);
		`
		:
		`
			top: ${props.t};
			bottom: ${props.b};
		`}
`;

const PositionFixed = ({
	children,
	top='auto',
	right='auto',
	bottom = 'auto',
	left='auto',
	center
}) => <Fixed t={top} r={right} b={bottom} l={left} center={center}>{children}</Fixed>;

export default PositionFixed;
