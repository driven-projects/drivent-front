import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useHotelRooms from '../../hooks/api/useHotelRooms';
import * as useBooking from '../../hooks/api/useBooking';
import Room from './Room';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function ChooseRoom({ booking: { bookinginfo, setBookinginfo, roomswap, setRoomswap  }, hotel: { selectedHotel, setSelectedHotel } }) {
  const navigate = useNavigate();
  const { hotelRooms, hotelRoomsError, hotelRoomsLoading, getHotelRooms } = useHotelRooms(selectedHotel);
  const { postBooking, postBookingError } = useBooking.usePostBooking();
  const { updateBooking, updateBookingError } = useBooking.useUpdateBooking();

  const [ selectedRoom, setSelectedRoom ] = useState(null);

  useEffect(() => {
    getHotelRooms();
  }, [ selectedHotel ]);

  let rooms = [];
  if(!hotelRoomsError && !hotelRoomsLoading ) {
    rooms = hotelRooms.Rooms;
  }

  function confirmRoom() {
    if(!roomswap) {
      postBooking(selectedRoom);
    } else {
      updateBooking(bookinginfo.id, selectedRoom);
    }
    setSelectedRoom(null);
    setSelectedHotel(null);
    setBookinginfo(null);
    setRoomswap(false);
    if(postBookingError || updateBookingError) {
      toast('Reserva falhou!');
    } else {
      toast('Ticket reservado com sucesso!');
      navigate('/dashboard/activities');
    }
  }

  return (
    <>
      <Message>Ótima pedida! Agora escolha seu quarto:</Message>
      <Rooms>
        {rooms.map((room, index) => <Room room={room} selected={{ selectedRoom, setSelectedRoom }} key={index}/>)}
      </Rooms>
      {(selectedRoom)?
        <BookRoomButton onClick={() => confirmRoom()}>{(roomswap)? 'TROCAR RESERVA' : 'RESERVAR QUARTO'}</BookRoomButton>
        :
        <></>
      }
    </>
  );
}

const Message = styled.p`
  color: #8E8E8E;
  margin-bottom: 32px;
`;

const Rooms = styled.div`
  display: flex;
  flex-wrap: wrap;
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
