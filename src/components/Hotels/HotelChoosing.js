import { Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useToken from '../../hooks/useToken';
import { getHotels } from '../../services/hotelsApi';

export default function ChooseHotel() {
  const token = useToken();
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: 'Driven Palace',
      image: 'https://i.ytimg.com/vi/uC4n3_EK_kA/movieposter.jpg',
      createdAt: '',
      updatedAt: '',
    },
    {
      id: 1,
      name: 'Driven Palace',
      image: 'https://i.ytimg.com/vi/uC4n3_EK_kA/movieposter.jpg',
      createdAt: '',
      updatedAt: '',
    },
    {
      id: 1,
      name: 'Driven Palace',
      image: 'https://i.ytimg.com/vi/uC4n3_EK_kA/movieposter.jpg',
      createdAt: '',
      updatedAt: '',
    },
    {
      id: 1,
      name: 'Driven Palace',
      image: 'https://i.ytimg.com/vi/uC4n3_EK_kA/movieposter.jpg',
      createdAt: '',
      updatedAt: '',
    }
  ]);

  //   useEffect(() => { //resolve payment
  //     getHotels(token).then((res) => setHotels(res));
  //   }, []);

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      <Message>Primeiro escolha o hotel</Message>
      <Hotels>
        {hotels.map((hotel) => <Hotel name={hotel.name} image={hotel.image} />)}
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

function Hotel({ name, image }) {
  return (
    <HotelContainer>
      <img src={image} alt='' />
      <h4>{name}</h4>
    </HotelContainer>
  );
}

const HotelContainer = styled.div`
  width: 196px;
  height: 264px;
  background-color: #EBEBEB;
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
