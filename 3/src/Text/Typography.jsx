import Text from "./Text";

const Typography = ({children, type}) => {
  const styleForType = {
    'title': { size: "32px", weight: "700", color: "var(--black-dark)", lineHeight: "38.73px" },
    'subtitle': { size: "18px", weight: "700", color: "var(--black-main)" },
    'button' : { size: "15px", weight: "600", lineHeight: "18.15px"}
  };
  
  return <Text {...styleForType[type]}>{children}</Text>
};

export default Typography;