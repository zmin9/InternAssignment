import styled from 'styled-components';

const Text = styled.span`
  ${({ theme, size, weight, color, lineHeight }) => `
		font-size: ${size};
		font-weight: ${weight};
		color: ${ color && theme.colors[color.split(' ')[0]]?.[color.split(' ')[1]]};
		line-height: ${lineHeight || 1};
	`}
`;

export default Text;
