import styled from 'styled-components';
export function GreenVerifyer() {
  return (
    <CardStyle>
      <p className='chip'></p>
      <p className='chip2'></p>
    </CardStyle> 
  );
}
const CardStyle = styled.div`
    background-color:#36b853;
    height:40px;
    width:40px;
    border-radius:25px;
    position:relative;
    .chip{
    width:12px;
    border-radius:5px;
    height:3px;
    position:absolute;
    top:21px;
    left:9px;
    background-color:white;
    rotate:45deg;
    }
    .chip2{
    width:17px;
    border-radius:5px;
    height:3px;
    position:absolute;
    top:19px;
    left:15px;
    background-color:white;
    rotate:-45deg;
    }
`;
