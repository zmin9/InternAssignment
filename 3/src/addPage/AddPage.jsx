import Stack from "../layout/Stack";
import { Button, IconButton } from "../button/Button";
import Typography from "../text/Typography";
import Icon from "../Icons";
import { useNavigate } from "react-router-dom";
import Wrapping from "../layout/Wrapping";
import {useEffect, useRef, useState} from "react";
import TextInput from "../textInput/TextInput";
import ToastMessage from "../popup/ToastMessage";


function AddPage ({data}) {
  const nav = useNavigate();
  const ref = useRef();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [isToastPopped1, setIsToastPopped1] = useState(false);
  const [isToastPopped2, setIsToastPopped2] = useState(false);
  const [toastContent, setToastContent] = useState({});
  let time;
  useEffect(()=>{
    return clearTimeout(time);
  }, []);
  
  const getToastMessageContent = () => {
    if (title.trim() === "") {
      return {
        type: "error",
        text: "제목을 입력해주세요"
      };
    }
    else {
      return {
        text: "테스크가 추가되었습니다."
      };
    }
  };
  
  const showToastMessage = () => {
    setToastContent(getToastMessageContent());
    if (!isToastPopped1 && !isToastPopped2){
      setIsToastPopped1(true);
    }
    else
      setIsToastPopped1(isToastPopped2);
      setIsToastPopped2(isToastPopped1);
  };
  
  const addTaskOnClickHandler = () => {
    ref.current.focus();
    showToastMessage();
    if (title.trim() !== "") {
      data.addTask(title.trim(), category.trim());
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
      {isToastPopped1
        && <ToastMessage
              type={toastContent.type}
              setToastState={setIsToastPopped1}>
            {toastContent.text}
          </ToastMessage>
      }
      {isToastPopped2
        && <ToastMessage
          type={toastContent.type}
          setToastState={setIsToastPopped2}>
          {toastContent.text}
        </ToastMessage>
      }
    </Wrapping>
  );
}

export default AddPage;