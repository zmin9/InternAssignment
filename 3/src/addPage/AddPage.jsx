import Stack from "../layout/Stack";
import {PrimaryButton, SecondaryButton} from "../button/Button";
import Typography from "../text/Typography";
import Icon from "../Icons";
import styled from "styled-components";
import Text from "../text/Text";
import { useNavigate } from "react-router-dom";
import Wrapping from "../layout/Wrapping";
import {useState} from "react";
const TaskInput = styled.input`
  outline: 0;
  width: 100%;
  padding: 16px 20px;
  background-color: var(--bg-sub-color);
  border-radius: 4px 4px 0 0;
  border-width: 0 0 2px;
  border-color: rgba(0, 0, 0, 0.3);
  
  &:focus {
    border-color: rgba(0, 0, 0, 0.8);
  }
`;

function AddPage ({data}) {
  const nav = useNavigate();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  
  const addTaskOnClickHandler = () => {
    if (title.trim()==="") {
      console.log('태스크 제목을 입력해주세요');
      return;
    }
    data.addTask(title,category);
    setTitle('');
    setCategory('');
  }
  
  return (
    <Wrapping top="55px">
      <Stack spacing={2}>
        <SecondaryButton small onClick={()=>nav("/")}>
          <Stack row alignCenter spacing={1}>
            <Icon type="back" size={24}/>
            <Typography type="button" >뒤로 가기</Typography>
          </Stack>
        </SecondaryButton>
        <Stack spacing={1}>
          <Typography type="title">새로운 태스크</Typography>
          <hr/>
        </Stack>
        <Text size="14px" lineHeight="16.41px" weight="400"><TaskInput placeholder="태스크 제목을 입력하세요" onChange={(e)=>setTitle(e.target.value)} value={title}/></Text>
        <Text size="14px" lineHeight="16.41px" weight="400"><TaskInput placeholder="카테고리를 입력하세요" onChange={(e)=>setCategory(e.target.value)} value={category}/></Text>
      </Stack>
      <PrimaryButton fullWidth className="absolute-b" onClick={addTaskOnClickHandler}><Typography type="button">태스크 추가</Typography></PrimaryButton>
    </Wrapping>
  );
}

export default AddPage;