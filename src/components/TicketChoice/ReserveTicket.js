/*eslint-disable*/
import Button from '../Form/Button';
import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import {OptionsContainer, Box, OptionTitle, OptionPrice} from './index';
export default function RerserveTicket({userTicket, totalPrice}) {
  return (
    <SubmitContainer>
      <Button type="submit" disabled={false}>
        Reservar Ingresso
      </Button>
    </SubmitContainer>
  );
}

const SubmitContainer = styled.div`
  margin-top: 40px !important;
  width: 100% !important;

  > button {
    margin-top: 0 !important;
  }
`;
