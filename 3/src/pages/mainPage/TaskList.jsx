import styled from 'styled-components';
import TaskItem from './TaskItem';
import FlexBox from '../../component/layout/FlexBox';
import Text from '../../component/text/Text';

const EmptyListMsg = styled.div`
  padding: ${({theme})=>theme.spacing[3]};
  text-align: center;
`;

const TaskList = ({title, tasks, onClick, active}) => (
	<FlexBox spacing={3}>
		<h3>
			<Text size='18px' weight='700' color='var(--black-main)'> {title} </Text>
		</h3>
		{
			tasks.length !== 0 ?
				tasks.map((task) =>
					<TaskItem key={task.id} task={task} onClick={onClick} active={active}/>
				)
				:
				<EmptyListMsg>
					<Text size="15px" color="var(--black-light)">항목이 없습니다.</Text>
				</EmptyListMsg>
		}
	</FlexBox>
);

export default TaskList;
