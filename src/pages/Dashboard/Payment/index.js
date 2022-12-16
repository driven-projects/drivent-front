import { useState } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import useEnrollment from '../../../hooks/api/useEnrollment';
import PaymentOptionsBox from '../../../components/Payment/PaymentOptionsBox';

export default function Payment() {
  const { enrollment } = useEnrollment();

  const [isRemote, setIsRemote] = useState();
  const [includesHotel, setIncludesHotel] = useState();

  const [isPresentialActive, setIsPresentialActive] = useState(false);
  const [isRemoteActive, setIsRemoteActive] = useState(false);

  const [isHotelActive, setIsHotelActive] = useState(false);
  const [isNonHotelActive, setIsNonHotelActive] = useState(false);

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
  }

  function selectWithoutHotel() {
    setIncludesHotel(false);
    setIsHotelActive(!isHotelActive);
    if(isNonHotelActive === true) {
      setIsNonHotelActive(false);
    };
  };

  function selectWithHotel() {
    setIncludesHotel(true);
    setIsNonHotelActive(!isNonHotelActive);
    if(isHotelActive === true) {
      setIsHotelActive(false);
    }
  }
  
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>

      {(!enrollment) ?
      
        <StyledCenteredText>
          <StyledTypography variant="h6">
            Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso
          </StyledTypography>
        </StyledCenteredText>

        :

        <>
          <TicketTypeModelBar>
            <StyledTypography variant="h6">
              Primeiro, escolha sua modalidade de ingresso
            </StyledTypography>

            <OptionsBar>
              <PaymentOptionsBox onClick={selectPresential} 
                style={{
                  backgroundColor: isPresentialActive ? '#FFEED2' : ''
                }}
              >
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
                }}
              >
                <h6>
                  Online
                </h6>
                <h6>
                  R$ 100
                </h6>
              </PaymentOptionsBox>
            </OptionsBar>
          </TicketTypeModelBar>

          {(isRemote === false) ?

            <TicketTypeModelBar>
              <StyledTypography variant="h6">
                Ótimo! Agora escolha sua modalidade de hospedagem
              </StyledTypography>

              <OptionsBar>
                <PaymentOptionsBox onClick={selectWithoutHotel} 
                  style={{
                    backgroundColor: isHotelActive ? '#FFEED2' : ''
                  }}
                >
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
                  }}
                >
                  <h6>
                    Com hotel
                  </h6>
                  <h6>
                    + R$ 250
                  </h6>
                </PaymentOptionsBox>
              </OptionsBar>
            </TicketTypeModelBar>

            :

            <TicketTypeModelBar>
              <StyledTypography variant="h6">
                Fechado! O total ficou em R$ 100. Agora é só confirmar:
              </StyledTypography>
            </TicketTypeModelBar>
          }
        </>
      }  
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

const StyledCenteredText = styled(Typography)`
  height: 80%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TicketTypeModelBar = styled.div`
  height: 235px;
  display: flex;
  flex-direction: column;

`;

const OptionsBar = styled.div`
  height: 175px;
  display: flex;
`;
