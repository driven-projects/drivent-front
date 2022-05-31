/*eslint-disable*/

import React, {useState, useEffect} from 'react';
import {OptionsContainer, Box, OptionTitle, OptionPrice} from './index';
import RerserveTicket from './ReserveTicket';
export default function TicketOptions({totalPrice}) {
  console.log(userTicket);
  return (
    <>
      {userTicket.hotelPrice === 0 ? (
        <RerserveTicket />
      ) : (
        <OptionsContainer>
          <Box onClick={(e) => setUserHotel(userTicket.hotelPrice)}>
            <OptionTitle>Sem Hotel</OptionTitle>
            <OptionPrice>+ R$ 0</OptionPrice>
          </Box>
          <Box onClick={(e) => setUserHotel(userTicket.hotelPrice)}>
            <OptionTitle>Com Hotel</OptionTitle>
            <OptionPrice>+ R${userTicket.hotelPrice}</OptionPrice>
          </Box>
        </OptionsContainer>
      )}
    </>
  );
}
