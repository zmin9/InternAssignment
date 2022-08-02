import styled from 'styled-components';

const BasicCard = styled.div`
  padding: ${({ theme }) => `${theme.spacing[3]} 19px`};
  background-color: ${({theme}) => theme.colors.bg.main};
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
