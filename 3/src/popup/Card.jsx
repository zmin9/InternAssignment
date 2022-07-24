import styled, {css} from "styled-components";

const cardSize = {
  lg: css`
    --card-from-edge: 36px;
  `,
  sm : css`
    --card-from-edge: 60px;
  `
};

const cardPosition = {
  top: css`
    --card-inset: 15% auto auto;
  `,
  center: css`
    --card-inset: calc(50% - 320px / 2) auto auto;
  `,
  bottom: css`
    --card-inset: auto auto 15%;
  `,
}

const BasicCard = styled.div`
  ${props => props.cardSize}
  ${props => props.cardPosition}
  z-index: 2;
  position: absolute;
  inset: var(--card-inset, auto);
  left: var(--card-from-edge, 0);
  right: var(--card-from-edge, 0);
  padding: 16px 19px;
  background-color: var(--bg-main-color);
  border-radius: 8px;
  text-align: center;
`;

const Card = ({children, size, position, ...props}) =>
  <BasicCard
    cardSize={cardSize[size]}
    cardPosition={cardPosition[position]}
    {...props}
  >
    {children}
  </BasicCard>
;

export default Card;