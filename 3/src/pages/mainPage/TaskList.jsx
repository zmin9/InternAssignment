import styled from 'styled-components';
import TaskItem from './TaskItem';
import FlexBox from '../../component/layout/FlexBox';
import Typography from '../../component/text/Typography';
import Text from '../../component/text/Text';

const EmptyListMsg = styled.div`
  padding: var(--spacing-2);
  text-align: center;
`;

const TaskList = ({title, tasks, onClick, active}) => (
	<FlexBox spacing={2}>
		<Typography type="section-title" tag="h3"> {title} </Typography>
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
