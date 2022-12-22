import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useHotelRooms from '../../hooks/api/useHotelRooms';
import Room from './Room';

export default function ChooseRoom({ selectedHotel }) {
  const { hotelRooms, hotelRoomsError, hotelRoomsLoading, getHotelRooms } = useHotelRooms(selectedHotel);
  const [ selectedRoom, setSelectedRoom ] = useState(null);

  useEffect(() => {
    getHotelRooms();
  }, [selectedHotel]);
 
  let rooms = [];
  if(!hotelRoomsError && !hotelRoomsLoading ) {
    rooms = hotelRooms.Rooms;
  }

  console.log(rooms);

  return (
    <>
      <Message>Ótima pedida! Agora escolha seu quarto:</Message>
      <Rooms>
        {rooms.map((room, index) => <Room room={room} selected={{ selectedRoom, setSelectedRoom }} key={index}/>)}
      </Rooms>    
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
