import Stack from "../layout/Stack";
import { Button, IconButton } from "../button/Button";
import Typography from "../text/Typography";
import Icon from "../Icons";
import { useNavigate } from "react-router-dom";
import Wrapping from "../layout/Wrapping";
import {useRef, useState} from "react";
import TextInput from "../textInput/TextInput";
import ToastMessage from "../popup/ToastMessage";


function AddPage ({data}) {
  const nav = useNavigate();
  const ref = useRef();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [isToastPopped, setIsToastPopped] = useState(false);
  const [toastContent, setToastContent] = useState({});
  
  const showToastMessage = () => {
    if (title.trim() === "") {
      setToastContent({
        type: "error",
        text: "제목을 입력해주세요"
      })
    } else {
      setToastContent({
        text: "테스크가 추가되었습니다."
      });
    }
    setIsToastPopped(true);
  };
  
  
  const addTaskOnClickHandler = () => {
    ref.current.focus();
    showToastMessage();
    if (title.trim() !== "") {
      data.addTask(title, category);
      setTitle('');
      setCategory('');
    }
  };
  
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
        <TextInput placeholder="태스크 제목을 입력하세요" onChange={setTitle} value={title} ref={ref}/>
        <TextInput placeholder="카테고리를 입력하세요" onChange={setCategory} value={category} />
      </Stack>
      <Button fullWidth position="absoluteB" onClick={addTaskOnClickHandler}>태스크 추가</Button>
      {isToastPopped
        && <ToastMessage
              type={toastContent.type}
              setToastState={setIsToastPopped}>
            {toastContent.text}
          </ToastMessage>
      }
    </Wrapping>
  );
}

export default AddPage;