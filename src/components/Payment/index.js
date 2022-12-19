import styled from 'styled-components';

export const StyledDiv = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-left:0px;
  display:flex;
  align-items: left;
  margin-top: -5px;
`;

export const SectionTitle = styled.p`
margin-top:20px;
  font-size: 24px;
  margin-bottom: 10px;
  color: #8e8e8e;
`;

export const ChoosedTicket = styled.div`
  margin-top:17px;
  width:290px;
  height:108px;
  background-color:#FFEED2;
  border-radius:15px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  .Title{
    color: #454545;
  }
  .Price{
    margin-top:5px;
    color:#898989;
  }
`;

export const Row = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export const InfoTitle = styled.p`
  color: #454545;
  font-weight:bold;
  font-size:16px;
  .Info{
    margin-top:5px;
    font-weight:400;
  }
`;
