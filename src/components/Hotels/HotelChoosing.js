import { Typography } from '@material-ui/core';
import { useState, useEffect } from 'react';
import useTicket from '../../hooks/api/useTicket';
import * as useBooking from '../../hooks/api/useBooking';
import styled from 'styled-components';
import useHotels from '../../hooks/api/useHotels';
import Hotel from './Hotel';
import ChooseRoom from './RoomsChoosing';
import HotelCard from './ChosedRoom';

export default function ChooseHotel() {
  const { hotels, hotelsError, hotelsLoading } = useHotels();

  const { getTicket } = useTicket();
  const [ ticketinfo, setTicketinfo ] = useState(false);
  const [ ticketpaid, setTicketpaid ] = useState(false);

  const { getBookings } = useBooking.useGetBooking();
  const [ bookinginfo, setBookinginfo ] = useState(null);

  const [ selectedHotel, setSelectedHotel ] = useState(null);
  const [ roomswap, setRoomswap ] = useState(false);

  useEffect(() => {
    getEnroll();
    VerifyBooking();
  }, [ bookinginfo ]);

  async function getEnroll() {
    const ticketApi = await getTicket();
    if(ticketApi.TicketType.includesHotel === true) setTicketinfo(true);
    if(ticketApi.status === 'PAID') setTicketpaid(true);
  }

  async function VerifyBooking() {
    const bookingApi = await getBookings();
    if(bookingApi) setBookinginfo(bookingApi);
  }

  if(bookinginfo && !roomswap) {
    return (
      <>
        <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
        <Message>Você já escolheu seu quarto:</Message> 
        <HotelCard bookinginfo = {bookinginfo}/>
        <BookRoomButton onClick={() => { setRoomswap(true); }}>TROCAR DE QUARTO</BookRoomButton>
      </>
    );
  }

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {(ticketinfo)?
        ((ticketpaid)?
          ((hotelsLoading || hotelsError || !hotels?.length)?
            (
              <>
                <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
                <Message>Não há hoteis disponíveis</Message> 
              </>
            )
            :
            (
              <>
                <Message>Primeiro escolha o hotel</Message>
                <Hotels>
                  {hotels.map((hotel, index) => <Hotel hotel={hotel} selected={{ selectedHotel, setSelectedHotel }} key={index} />)}
                </Hotels>
                {(selectedHotel)?
                  <ChooseRoom hotel={{ selectedHotel, setSelectedHotel }} booking={{ bookinginfo, setBookinginfo, roomswap, setRoomswap }}/>
                  :
                  <></>
                }
              </>
            )
          )
          :
          ( 
            <HotelTitle>
              Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem
            </HotelTitle> 
          )
        )
        :
        (
          <HotelTitle>
            Sua modalidade de ingresso não inclui hospedagem <br/>
            Prossiga para a escolha de Atividades
          </HotelTitle> 
        )
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

const BookRoomButton = styled.button`
  width: 182px;
  height: 37px;
  background-color: #E0E0E0;
  border: transparent;
  border-radius: 4px;
  margin: 30px 0px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
`;
