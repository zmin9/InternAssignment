import Stack from "../layout/Stack";
import { Button, IconButton } from "../button/Button";
import Typography from "../text/Typography";
import Icon from "../Icons";
import { useNavigate } from "react-router-dom";
import Wrapping from "../layout/Wrapping";
import { useState } from "react";
import TextInput from "../textInput/TextInput";


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
        <IconButton type="secondary" size="md" label="뒤로가기" onClick={() => nav("/")}>
          <Icon type="back" size={24}/>
        </IconButton>
        <Stack spacing={1}>
          <Typography type="title" tag="h1">새로운 태스크</Typography>
          <hr/>
        </Stack>
        <TextInput placeholder="태스크 제목을 입력하세요" onChange={setTitle} value={title} />
        <TextInput placeholder="카테고리를 입력하세요" onChange={setCategory} value={category} />
      </Stack>
      <Button fullWidth position="absoluteB" onClick={addTaskOnClickHandler}>태스크 추가</Button>
    </Wrapping>
  );
}

export default AddPage;