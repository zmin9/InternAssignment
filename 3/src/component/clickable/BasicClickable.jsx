import styled from 'styled-components';

const BasicClickable = styled.button`
  
  ${({theme, clickableType, colorType}) => theme.clickableStyle[clickableType]?.[colorType]}
  
  padding: ${({theme, size})=>theme.spacing[size]};
  width: ${({theme, fullWidth}) => fullWidth && `calc(100vw - 2 * ${theme.spacing[3]})`};
  border-radius: ${({round}) => round? '9999px' : '4px' };
  line-height: 0;
  
  transition: filter;
  transition-duration: 0.2s;
  
  :active {
    filter: brightness(0.9);
  }
`;

export default BasicClickable;
