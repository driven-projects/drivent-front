import { Typography } from '@material-ui/core';
import { useState, useEffect } from 'react';
import useTicket from '../../hooks/api/useTicket';
import useBooking from '../../hooks/api/useBooking';
import styled from 'styled-components';
import useHotels from '../../hooks/api/useHotels';
import Hotel from './Hotel';

export default function ChooseHotel() {
  const { hotels, hotelsError, hotelsLoading } = useHotels();
  const [ selected, setSelected ] = useState(0);

  const { getTicket } = useTicket();
  const { getBookings } = useBooking();
  const [ticketinfo, Setticketinfo] = useState('');
  const [bookinginfo, Setbookinginfo] = useState('');
  useEffect(() => {
    getEnroll();
    VerifyBooking();
  }, []);

  async function getEnroll() {
    const ticketApi = await getTicket();
    if(ticketApi.TicketType.includesHotel === true) {
      Setticketinfo(true);
    }
  }
  async function VerifyBooking() {
    const bookingApi = await getBookings();
    console.log(bookingApi);
    if(bookingApi) {
      Setbookinginfo(bookinginfo);
    }
  }
  if(bookinginfo) {
    return (
      <>
        <StyledTypography variant="h4">Mandou bem</StyledTypography>
      </>
    );
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
