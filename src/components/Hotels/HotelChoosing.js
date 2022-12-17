import { Typography } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import useHotels from '../../hooks/api/useHotels';
import Hotel from './Hotel';

export default function ChooseHotel() {
  const { hotels, hotelsError, hotelsLoading } = useHotels();
  const [ selected, setSelected ] = useState(0);

  if(hotelsLoading || hotelsError || !hotels.length) 
    return (
      <>
        <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
        <Message>Não há hoteis disponíveis</Message>
      </>
    );

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      <Message>Primeiro escolha o hotel</Message>
      <Hotels>
        {hotels.map((hotel, index) => <Hotel hotel={hotel} selected={{ selected, setSelected }} key={index} />)}
      </Hotels>
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
