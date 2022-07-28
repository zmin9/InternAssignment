import styled, {css} from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
	${p => css`
    flex-wrap: ${p.wrap};
    flex-direction: ${p.row};
    align-items: ${p.alignCenter};
    gap: ${p.gap};
	`}
	& > * {
    flex-shrink: 0;
  }
`;

const FlexBox = ({children, spacing, row, alignCenter, wrap}) => {
	const checkIterable = (obj) => {
		if (obj === null || obj === undefined) return false;
		return typeof obj[Symbol.iterator] === 'function';
	};
	return (
		<FlexContainer
			row={row ? 'row' : 'column'}
			alignCenter={alignCenter && 'center'}
			gap={`var(--spacing-${spacing})`}
			wrap={wrap && 'wrap'}
		>
			{checkIterable(children)
				? children.flat().map((child) => child)
				: children}
		</FlexContainer>
	);
};

export default FlexBox;
