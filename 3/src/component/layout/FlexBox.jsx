import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  ${({ theme, wrap, row, alignCenter, gap }) => `
    flex-wrap: ${wrap};
    flex-direction: ${row};
    align-items: ${alignCenter};
    gap: ${theme.spacing[gap]};
	`}
  & > * {
    flex-shrink: 0;
  }
`;

const FlexBox = ({children, spacing, row, alignCenter, wrap}) =>
	<FlexContainer
		row={row ? 'row' : 'column'}
		alignCenter={alignCenter && 'center'}
		gap={spacing}
		wrap={wrap && 'wrap'}
	>
		{children}
	</FlexContainer>
;

export default FlexBox;
