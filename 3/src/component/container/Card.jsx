import styled from 'styled-components';

const BasicCard = styled.div`
  ${props => props.cardSize}
	
  padding: 16px 19px;
  background-color: var(--bg-main-color);
  border-radius: 8px;
  text-align: center;
`;

const Card = ({children, ...props}) =>
	<BasicCard
		{...props}
	>
		{children}
	</BasicCard>
;

export default Card;
