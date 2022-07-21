import Stack from "../Stack/Stack";
import Text from "../Text/Text";
import styled from "styled-components";
import Icon from "../Icons";

const HidedCheckBoxForLabel = styled.input`
  display: none;

  & + label {
    .check-box {
      svg {
        visibility: hidden;
      }
    }
  }
  &:checked + label {
    .check-box {
      svg {
        visibility: visible;
      }
    }
    .title {
      color: var(--black-light);
    }
    .category {
      display: none;
    }
    
  }
`;
const CheckBox = styled.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border: solid 2px #DADADA;
  border-radius: 6px;
  
  color: var(--black-main);
`;

const TaskItem = ({task}) => {
  return (
    <div>
      <HidedCheckBoxForLabel type='checkbox' id={'task' + task.id} checked={task.idDone}/>
      <label htmlFor={'task' + task.id}>
        <Stack row spacing={2}>
          <CheckBox className="check-box">
            <Icon type='check'/>
          </CheckBox>
          <Stack spacing={0}>
            <Text className="title" size="14px" weight="500" color="var(--black-main)" lineHeight="24px">{task.title}</Text>
            <Text className="category" size="14px" weight="600" color="var(--black-light)">{task.category}</Text>
          </Stack>
        </Stack>
      </label>
    </div>
  );
};

export default TaskItem;