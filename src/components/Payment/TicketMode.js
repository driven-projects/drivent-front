import { useState } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import PaymentOptionsBox from './PaymentOptionsBox';

export default function TicketMode({ setIsRemote }) {
  const [isPresentialActive, setIsPresentialActive] = useState(false);
  const [isRemoteActive, setIsRemoteActive] = useState(false);

  function selectPresential() {
    setIsRemote(false);
    setIsPresentialActive(!isPresentialActive);
    if(isRemoteActive === true) {
      setIsRemoteActive(false);
    };
  };
    
  function selectRemote() {
    setIsRemote(true);
    setIsRemoteActive(!isRemoteActive);
    if(isPresentialActive === true) {
      setIsPresentialActive(false);
    }
  };
  return (
    <TicketTypeModelBar>
      <StyledTypography variant="h6">
        Primeiro, escolha sua modalidade de ingresso
      </StyledTypography>

      <OptionsBar>
        <PaymentOptionsBox onClick={selectPresential} 
          style={{
            backgroundColor: isPresentialActive ? '#FFEED2' : ''
          }}>
          <h6>
            Presencial
          </h6>
          <h6>
            R$ 250
          </h6>
        </PaymentOptionsBox>

        <PaymentOptionsBox onClick={selectRemote}
          style={{
            backgroundColor: isRemoteActive ? '#FFEED2' : ''
          }}>
          <h6>
            Online
          </h6>
          <h6>
            R$ 100
          </h6>
        </PaymentOptionsBox>
      </OptionsBar>
    </TicketTypeModelBar>
  );
}

const TicketTypeModelBar = styled.div`
  height: 235px;
  display: flex;
  flex-direction: column;

`;

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

const OptionsBar = styled.div`
  height: 175px;
  display: flex;
`;
