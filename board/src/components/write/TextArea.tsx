import styled from 'styled-components';
import mediaQuery from '../../styles/mediaQuery';

type TextAreaProps = {
  placeholder: string,
  height: string,
}

const CustomTextArea = styled.textarea<TextAreaProps>`
  resize: none;
  box-sizing: border-box;
  border: 0;
  border-bottom: solid 1px #d0d0d0;
  padding: 12px;
  width: 100%;
  height: ${({ height }) => height};
  color: ${({ theme }) => theme.colors.textMain};
  font-size: 16px;
  vertical-align: top;
  
  ${mediaQuery.small} {
    font-size: 14px;
  }
`;

const TextArea = (props: TextAreaProps) =>
  <CustomTextArea
    placeholder={props.placeholder}
    height={props.height || 'auto'}
  />
;

export default TextArea;
