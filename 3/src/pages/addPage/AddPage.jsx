import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FlexBox from '../../component/layout/FlexBox';
import { Button, IconButton } from '../../component/button/Button';
import Icon from '../../component/Icons';
import Padding from '../../component/container/Padding';
import TextInput from '../../component/textInput/TextInput';
import ToastMessage from '../../component/popup/ToastMessage';
import CategoryChip from '../../component/button/CategoryChip';
import useTaskData from '../../useTaskData';
import Text from '../../component/text/Text';
import PositionFixed from '../../component/layout/PositionFixed';


function AddPage () {
	const data = useTaskData();
	const nav = useNavigate();
	const titleRef = useRef();
	const categoryRef = useRef();
	const [selectedCategory, setSelectedCategory] = useState('+');
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
		categoryRef.current.value = category === '+'? '' : category;
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
			setSelectedCategory('+');
		}
	};
 
	return (
		<Padding top="55px" side="var(--spacing-2)">
			<Padding bottom="var(--spacing-1)">
				<IconButton type="secondary" size="md" label="뒤로가기" onClick={() => nav('/')}>
					<Icon type="back" size={24}/>
				</IconButton>
			</Padding>
			<FlexBox spacing={2}>
				<FlexBox spacing={1}>
					<h1>
						<Text size='32px' weight='700' color='var(--black-dark)' lineHeight='38.73px'>새로운 태스크</Text>
					</h1>
					<hr/>
				</FlexBox> {/* form */}
				<TextInput
					placeholder="태스크 제목을 입력하세요"
					ref={titleRef}/>
				<TextInput
					placeholder="카테고리를 입력하세요"
					disabled={selectedCategory !== '+'}
					ref={categoryRef}
				/>
				<FlexBox spacing={1} wrap row>
					{['+', ...data.getCategoryArr()].map((category, idx) =>
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
				<Button fullWidth onClick={addTaskOnClickHandler}>태스크 추가</Button>
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
