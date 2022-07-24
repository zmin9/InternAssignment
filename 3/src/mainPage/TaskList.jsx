import TaskItem from "./TaskItem";
import Stack from "../layout/Stack";
import Typography from "../text/Typography";
import styled from "styled-components";
import Text from "../text/Text";

const EmptyListMsg = styled.div`
  padding: var(--spacing-2);
  text-align: center;
`;

const TaskList = ({title, tasks, onClick, active}) => {
  return (
    <Stack spacing={2}>
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
    </Stack>
  );
};

export default TaskList;