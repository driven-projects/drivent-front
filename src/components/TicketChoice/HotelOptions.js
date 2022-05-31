/*eslint-disable*/

import React, {useState, useEffect} from 'react';
import {OptionsContainer, Box, OptionTitle, OptionPrice} from './index';
import RerserveTicket from './ReserveTicket';
export default function HotelOptions({totalPrice, setTotalPrice, userTicket}) {
  const [hotel, setHotel] = useState(null);
  function handleChoice(selected) {
    setHotel(selected);
    const sumTicketHotel = parseInt(userTicket.price) + parseInt(selected);
    setTotalPrice(sumTicketHotel);
  }

  return (
    <>
      {userTicket ? (
        userTicket.hotelPrice === 0 ? (
          <RerserveTicket totalPrice={totalPrice} userTicket={userTicket} />
        ) : (
          <>
            <OptionsContainer>
              <Box
                id={0}
                onClick={(e) => handleChoice(e.target.id)}
                active={hotel ? (hotel == 0 ? true : false) : false}
              >
                <OptionTitle>Sem Hotel</OptionTitle>
                <OptionPrice>+ R$ 0</OptionPrice>
              </Box>
              <Box
                id={350}
                onClick={(e) => handleChoice(e.target.id)}
                active={hotel ? (hotel == userTicket.hotelPrice ? true : false) : false}
              >
                <OptionTitle>Com Hotel</OptionTitle>
                <OptionPrice>+ R${userTicket.hotelPrice}</OptionPrice>
              </Box>
            </OptionsContainer>
            {hotel ? <RerserveTicket totalPrice={totalPrice} userTicket={userTicket} /> : <></>}
          </>
        )
      ) : (
        <></>
      )}
    </>
  );
}
