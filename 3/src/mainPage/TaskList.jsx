import Text from "../Text/Text";
import TaskItem from "./TaskItem";
import Stack from "../Stack/Stack";

const TaskList = ({title, tasks}) => {
  return (
    <Stack spacing={2}>
      <Text size="18px" weight="700" color="var(--black-main)"> {title} </Text>
      {tasks.map((task) =>
        <TaskItem key={task.id} task={task}/>
      )}
    </Stack>
  );
};

export default TaskList;