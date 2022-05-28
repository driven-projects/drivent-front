import styled from 'styled-components';

export default function ButtonOption({ size, height, text, value, selected, setSelected, type }) {
  return (
    <ClickButton size={size} height={height} text={text} selected={selected} type={type} 
      onClick={() => {
        selected[type] = text;
        setSelected({ ...selected });
      }
      }
    >
      <span>{text}</span>
      <p>{value}</p>
    </ClickButton>
  );
}

const ClickButton = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size, height }) => (height)? height : size}px;

  border-radius: 20px;
  ${({ text, selected, type }) => (selected[type] === text)?
    'background-color: #FFEED2;':
    'border: 1px solid #CECECE;'
}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3px;

  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #8E8E8E;

  span {
    font-size: 16px;
    color: #454545;
  }

  &:hover{
    cursor: pointer;
  }
`;

