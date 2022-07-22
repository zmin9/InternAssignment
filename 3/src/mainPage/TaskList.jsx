import TaskItem from "./TaskItem";
import Stack from "../Layout/Stack";
import Typography from "../Text/Typography";

const TaskList = ({title, tasks, onClick}) => {
  return (
    <Stack spacing={2}>
      <Typography type="subtitle"> {title} </Typography>
      {tasks.map((task) =>
        <TaskItem key={task.id} task={task} onClick={onClick}/>
      )}
    </Stack>
  );
};

export default TaskList;