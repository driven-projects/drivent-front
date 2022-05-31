/*eslint-disable*/

import React, {useState, useEffect} from 'react';
import {OptionsContainer, Box, OptionTitle, OptionPrice} from './index';
export default function TicketOptions({tickets, userTicket, setUserTicket}) {
  return (
    <OptionsContainer>
      {tickets.map((ticket) => (
        <Box
          id={ticket.id}
          onClick={(e) => setUserTicket(ticket)}
          active={userTicket ? (userTicket.id === ticket.id ? true : false) : false}
        >
          <OptionTitle>{ticket.name}</OptionTitle>
          <OptionPrice>R${ticket.price}</OptionPrice>
        </Box>
      ))}
    </OptionsContainer>
  );
}
