import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FlexBox from '../../component/layout/FlexBox';
import { Button, IconButton } from '../../component/clickable/Button';
import Icon from '../../component/Icons';
import Padding from '../../component/container/Padding';
import TextInput from '../../component/textInput/TextInput';
import ToastMessage from '../../component/popup/ToastMessage';
import CategoryChip from '../../component/clickable/CategoryChip';
import useTaskData from '../../useTaskData';
import Text from '../../component/text/Text';
import PositionFixed from '../../component/layout/PositionFixed';


function AddPage () {
	const data = useTaskData();
	const nav = useNavigate();
	const titleRef = useRef();
	const categoryRef = useRef();
	const defaultCategory = '+';
	const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
	const [isToastPopped1, setIsToastPopped1] = useState(false);
	const [isToastPopped2, setIsToastPopped2] = useState(false);
	const [toastContent, setToastContent] = useState({});
	const getToastMessageContent = () => {
		if (titleRef.current.value.trim() === '') {
			return {
				type: 'error',
				text: '제목을 입력해주세요'
			};
		}
		return {
			type: 'success',
			text: '테스크가 추가되었습니다.'
		};
	};
	const onClickCategoryChip = (category) => {
		setSelectedCategory(category);
		categoryRef.current.value = category === defaultCategory? '' : category;
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
		titleRef.current.focus();
		showToastMessage();
		if (titleRef.current.value.trim() !== '') {
			data.addTask(titleRef.current.value.trim(), categoryRef.current.value.trim());
			titleRef.current.value = '';
			categoryRef.current.value = '';
			setSelectedCategory(defaultCategory);
		}
	};
 
	return (
		<Padding top="55px" side="16px">
			<Padding bottom="8px">
				<IconButton colorType="secondary" label="뒤로가기" onClick={() => nav('/')}>
					<Icon type="back" size={24}/>
				</IconButton>
			</Padding>
			<FlexBox spacing={3}>
				<FlexBox spacing={1}>
					<h1>
						<Text size='32px' weight='700' color='black dark' lineHeight='38.73px'>새로운 태스크</Text>
					</h1>
					<hr/>
				</FlexBox>
				<TextInput
					placeholder="태스크 제목을 입력하세요"
					ref={titleRef}/>
				<TextInput
					placeholder="카테고리를 입력하세요"
					disabled={selectedCategory !== defaultCategory}
					ref={categoryRef}
				/>
				<FlexBox spacing={1} wrap row>
					{[defaultCategory, ...data.getCategoryArr()].map((category, idx) =>
						<CategoryChip
							key={idx}
							category={category}
							selectedCategory={selectedCategory}
							onClick={onClickCategoryChip}
						/>
					)}
				</FlexBox>
			</FlexBox>
			<PositionFixed bottom="37px">
				<Button size={3} colorType='primary' fullWidth onClick={addTaskOnClickHandler}>태스크 추가</Button>
			</PositionFixed>
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
		</Padding>
	);
}

export default AddPage;
