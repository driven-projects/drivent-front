import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useHotelRooms from '../../hooks/api/useHotelRooms';

export default function ChooseRoom({ selectedHotel }) {
  console.log(selectedHotel);
  const [ refresh, setRefresh ] = useState(true);
  //não relança a req ao mudar o selectedHotel
  let { hotelRooms, hotelRoomsError, hotelRoomsLoading } = useHotelRooms(selectedHotel);
  
  useEffect(() => {
    setRefresh(!refresh);
  }, [selectedHotel]);

  console.log(hotelRooms);
  
  let rooms = [];

  if(!hotelRoomsError && !hotelRoomsLoading ) {
    rooms = hotelRooms.Rooms;
  }

  return (
    <>
      <Message>Ótima pedida! Agora escolha seu quarto:</Message>
      {rooms.map((room) => <div>{room.name}</div>)}
    </>
  );
}

const Message = styled.p`
  color: #8E8E8E;
  margin-bottom: 32px;
`;
