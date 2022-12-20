import styled from 'styled-components';
export function CreditCard() {
  return (
    <CreditCardStyle>
      <p className='chip'></p>
      <p className='cardCode'>.... .... .... ....</p>
      <p className='Name'>YOUR NAME HERE</p>
      <p className='date'>··/··</p>
      <p className='valid'>valid thru</p>
    </CreditCardStyle> 
  );
}
const CreditCardStyle = styled.div`
    background-color:#929292;
    height:170px;
    width:290px;
    border-radius:15px;
    position:relative;
    .chip{
      top:20px;
      left:28px;
      position:absolute;
      background-color:#f9d064;
      width:35px;
      height:25px;
      border-radius:5px;
    }
    .cardCode{
      position:absolute;
      font-size:48px;
      left:25px;
      top:45px;
      color:white;
    }
    .Name{
      position:absolute;
      font-size:18PX;
      left:25px;
      bottom:25px;
      color:#c3c3c3;
    }
    .date{
      position:absolute;
      font-size:25PX;
      right:25px;
      bottom:25px;
      color:#c3c3c3;
    }
    .valid{
      position:absolute;
      font-size:10PX;
      right:25px;
      bottom:50vpx;
      color:#c3c3c3;
    }
`;
