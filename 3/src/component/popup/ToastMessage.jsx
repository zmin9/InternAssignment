import styled from 'styled-components';
import {useEffect, useState} from 'react';
import Card from '../container/Card';
import Text from '../text/Text';

const ToastMessageCard = styled(Card)`
  ${(props) => props.transitionPos};
  ${({ theme, messageType }) => theme.toastMessage[messageType]};

  transition: 0.4s;
`;

const mountStyle = `
  transform: translateY(20px);
  opacity: 0
`;
const unmountStyle = `
  opacity: 0;
`;

const ToastMessage = ({ children, type, setToastState }) => {
	const [transitionPos, setTransitionPos] = useState(mountStyle);

	useEffect(() => {
		setTransitionPos(null);
		const mountTime = setTimeout(() => {
			setTransitionPos(unmountStyle);
		}, 2500);
		const unmountTime = setTimeout(() => {
			setToastState(false);
		}, 2900);

		return () => {
			clearTimeout(mountTime);
			clearTimeout(unmountTime);
		};
	}, []);

	return (
		<ToastMessageCard
			messageType={type}
			transitionPos={transitionPos}
		>
			<Text size="14px">{children}</Text>
		</ToastMessageCard>
	);
};


export default ToastMessage;