/*eslint-disable*/
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import useGetTicket from '../../hooks/api/useTicket';

export default function TicketChoice() {
  //   const {tickets, ticketsLoading, ticketsError} = useGetTicket();

  //   useEffect(() => {
  //     if (tickets) {
  //       console.log('tickets');
  //     }
  //   });

  const tickets = [
    {id: 1, name: 'Presencial', price: '250'},
    {id: 2, name: 'Online', price: '100'},
  ];

  return (
    <>
      <OptionsContainer>
        {tickets.map((ticket) => (
          <Box id={ticket.id}>
            <OptionTitle>{ticket.name}</OptionTitle>
            <OptionPrice>R${ticket.price}</OptionPrice>
          </Box>
        ))}
      </OptionsContainer>
    </>
  );
}

const OptionsContainer = styled.div`
  display: flex;
  height: 145px;
  gap: 24px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 145px;
  width: 145px;
  border-radius: 20px;
  border: 1px solid #cecece;
`;

const OptionTitle = styled.span`
  font-size: 19px;
  weight: 400;
  line-height: 18.75px;
  color: #454545;
  text-align: center;
`;

const OptionPrice = styled.span`
  font-size: 16px;
  weight: 400;
  line-height: 16.41px;
  color: #898989;
  text-align: center;
`;
