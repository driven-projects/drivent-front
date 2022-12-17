import { Typography } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import useHotels from '../../hooks/api/useHotels';

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

function Hotel({ hotel: { id, name, image }, selected: { selected, setSelected } }) {
  return (
    <HotelContainer selected={selected===id} onClick={() => setSelected(id)}>
      <img src={image} alt='' />
      <h4>{name}</h4>
    </HotelContainer>
  );
}

const HotelContainer = styled.div`
  width: 196px;
  height: 264px;
  background-color: ${props => (props.selected)? '#FFEED2;' : '#EBEBEB;'};
  border-radius: 10px;
  margin-right: 19px;
  padding: 16px 14px 16px 14px;
  h4 {
    margin-top: 10px;
    color: #343434;
    font-size: 20px;
  }
  img {
    width: 168px;
    height: 109px;
    border-radius: 5px;
  }
`;
