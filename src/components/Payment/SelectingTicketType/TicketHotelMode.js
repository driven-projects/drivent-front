import { useState } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import PaymentOptionsBox from './PaymentOptionsBox';

export default function TicketHotelMode({ setIncludesHotel, setShowHotelButton }) {
  const [isHotelActive, setIsHotelActive] = useState(false);
  const [isNonHotelActive, setIsNonHotelActive] = useState(false);

  function selectWithoutHotel() {
    setIncludesHotel(false);
    setIsHotelActive(true);
    if(isNonHotelActive === true) {
      setIsNonHotelActive(false);
    };
    setShowHotelButton(true);
  };

  function selectWithHotel() {
    setIncludesHotel(true);
    setIsNonHotelActive(true);
    if(isHotelActive === true) {
      setIsHotelActive(false);
    }
    setShowHotelButton(true);
  };

  return (
    <TicketTypeModelBar>
      <StyledTypography variant="h6">
        Ótimo! Agora escolha sua modalidade de hospedagem
      </StyledTypography>

      <OptionsBar>
        <PaymentOptionsBox onClick={selectWithoutHotel} 
          style={{
            backgroundColor: isHotelActive ? '#FFEED2' : ''
          }}>

          <h6>
            Sem hotel
          </h6>
          <h6>
            + R$ 0
          </h6>
        </PaymentOptionsBox>
        <PaymentOptionsBox onClick={selectWithHotel}
          style={{
            backgroundColor: isNonHotelActive ? '#FFEED2' : ''
          }}>

          <h6>
            Com hotel
          </h6>
          <h6>
            + R$ 250
          </h6>
        </PaymentOptionsBox>
      </OptionsBar>
    </TicketTypeModelBar>
  );
}

const TicketTypeModelBar = styled.div`
  height: 210px;
  display: flex;
  flex-direction: column;

`;

const StyledTypography = styled(Typography)`
  margin-bottom: 10px!important;
`;

const OptionsBar = styled.div`
  height: 175px;
  display: flex;
`;
