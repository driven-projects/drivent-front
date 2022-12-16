import { useState } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import useEnrollment from '../../../hooks/api/useEnrollment';
import PaymentOptionsBox from '../../../components/Payment/PaymentOptionsBox';
import TicketMode from '../../../components/Payment/TicketMode';
import TicketHotelMode from '../../../components/Payment/TicketHotelMode';

export default function Payment() {
  const { enrollment } = useEnrollment();

  const [isRemote, setIsRemote] = useState();
  const [includesHotel, setIncludesHotel] = useState();
  
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
          <TicketMode setIsRemote={setIsRemote} />

          {(isRemote === false) ?

            <>
              <TicketHotelMode setIncludesHotel={setIncludesHotel} />

              {(includesHotel === false) ?
                <>
                  <TicketTypeModelBar>
                    <StyledTypography variant="h6">
                      Fechado! O total ficou em R$ 250. Agora é só confirmar:
                    </StyledTypography>
                  </TicketTypeModelBar>
                </>
                :
                <>
                  <TicketTypeModelBar>
                    <StyledTypography variant="h6">
                      Fechado! O total ficou em R$ 600. Agora é só confirmar:
                    </StyledTypography>
                  </TicketTypeModelBar>
                </>
              }
            </>

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
