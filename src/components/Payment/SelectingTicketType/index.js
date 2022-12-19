import { useState } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import TicketMode from './TicketMode';
import TicketHotelMode from './TicketHotelMode';
import ReserveOption from './ReserveOption';
import useEnrollment from '../../../hooks/api/useEnrollment';

export default function SelectingTicketType() {
  const { enrollment } = useEnrollment();

  const [isRemote, setIsRemote] = useState('');
  const [includesHotel, setIncludesHotel] = useState('');

  const [showOnlinebutton, setShowOnlinebutton] = useState(false);
  const [showHotelButton, setShowHotelButton] = useState(false);

  if(!enrollment)
    return(
      <StyledCenteredText>
        <StyledTypography variant="h6">
          Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso
        </StyledTypography>
      </StyledCenteredText>
    );

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>

      <>
        <TicketMode setIsRemote={setIsRemote} setShowOnlinebutton={setShowOnlinebutton} setShowHotelButton={setShowHotelButton} />

        {(isRemote === false) ?
          <>
            <TicketHotelMode setIncludesHotel={setIncludesHotel} setShowHotelButton={setShowHotelButton} />

            {(showHotelButton === true) ?
              <>
                {(includesHotel === false) ?
                  <ReserveOption value={250} isRemote={isRemote} includesHotel={includesHotel} />
                  :
                  <ReserveOption value={600} isRemote={isRemote} includesHotel={includesHotel} />
                }
              </>
              :
              <></>
            }
          </>
          :
          <>
            {(showOnlinebutton === true) ?
              <ReserveOption value={100} isRemote={isRemote} includesHotel={includesHotel} />
              :
              <></>
            }
          </>
        }
      </>
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
