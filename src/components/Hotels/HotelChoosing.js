import { Typography } from '@material-ui/core';
import { useState, useEffect } from 'react';
import usePayment from '../../hooks/api/usePayment';
import styled from 'styled-components';
import useHotels from '../../hooks/api/useHotels';
import Hotel from './Hotel';
import ChooseRoom from './RoomsChoosing';

export default function ChooseHotel() {
  const { hotels, hotelsError, hotelsLoading } = useHotels();
  const [ selected, setSelected ] = useState(null);

  const { getTicket } = usePayment();
  const [ticketinfo, Setticketinfo] = useState('');
  useEffect(() => {
    getEnroll();
  }, []);

  async function getEnroll() {
    const ticketApi = await getTicket();
    if(ticketApi.TicketType.includesHotel === true) {
      Setticketinfo(true);
    }
  }
  if(hotelsLoading || hotelsError || !hotels.length) 
    return (
      <>
        <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
        {ticketinfo? 
          <Message>Não há hoteis disponíveis</Message> 
          : 
          <HotelTitle>Sua modalidade de ingresso
            não inclui hospedagem <br/>
            Prossiga para a escolha de Atividades
          </HotelTitle> 
        }
      </>
    );

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {ticketinfo? 
        <>
          <Message>Primeiro escolha o hotel</Message>
          <Hotels>
            {hotels.map((hotel, index) => <Hotel hotel={hotel} selected={{ selected, setSelected }} key={index} />)}
          </Hotels>
          {(selected)? <ChooseRoom selectedHotel={selected} /> : <></>}
        </> 
        : 
        <HotelTitle>oi</HotelTitle> 
      }
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

const Message = styled.p`
  color: #8E8E8E;
  margin-bottom: 18px;
`;

const Hotels = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 52px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const HotelTitle = styled.div`
font-family: 'Roboto', sans-serif;
color: #8e8e8e;
display: flex;
flex-direction: flex;
justify-content: center;
align-items:center;
height:20%;
width: 50%;
margin-left:25%;
margin-top:30%;
`;
