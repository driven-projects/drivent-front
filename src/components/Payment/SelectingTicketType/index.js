import { useState } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import TicketMode from './TicketMode';
import TicketHotelMode from './TicketHotelMode';
import ReserveOption from './ReserveOption';
import useEnrollment from '../../../hooks/api/useEnrollment';
import useTicketType from '../../../hooks/api/useTicket';
import useTicketByUserId from '../../../hooks/api/useTicketByUserId';

export default function SelectingTicketType() {
  const { enrollment } = useEnrollment();
  const { ticketType, ticketTypeLoading, ticketTypeError } = useTicketType();
  const { userTicket } = useTicketByUserId();
  console.log(ticketType);

  let onlineTicket = [];
  let withHotelTicket = [];
  let withoutHotelTicket = [];

  if(!ticketTypeLoading && !ticketTypeError) {
    onlineTicket = ticketType.filter((type) => (type.isRemote === true && type.includesHotel === false))[0];
    withHotelTicket = ticketType.filter((type) => (type.isRemote === false && type.includesHotel === true))[0];
    withoutHotelTicket = ticketType.filter((type) => (type.isRemote === false && type.includesHotel === false))[0];
  }

  const [isRemote, setIsRemote] = useState('');
  const [includesHotel, setIncludesHotel] = useState('');

  const [showOnlinebutton, setShowOnlinebutton] = useState(false);
  const [showHotelButton, setShowHotelButton] = useState(false);

  if(!enrollment)
    return(
      <>
        <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>

        <StyledCenteredText>
          <StyledTypography variant="h6">
            Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso
          </StyledTypography>
        </StyledCenteredText>
      </>
    );

  if(!userTicket)
    return (
      <>
        <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>

        <>
          <TicketMode setIsRemote={setIsRemote} setIncludesHotel={setIncludesHotel} setShowOnlinebutton={setShowOnlinebutton} setShowHotelButton={setShowHotelButton} onlineTicket={onlineTicket} />

          {(isRemote === false) ?
            <>
              <TicketHotelMode setIncludesHotel={setIncludesHotel} setShowHotelButton={setShowHotelButton} withHotelTicket={withHotelTicket} withoutHotelTicket={withoutHotelTicket} />

              {(showHotelButton === true) ?
                <>
                  {(includesHotel === false) ?
                    <ReserveOption value={250} isRemote={isRemote} includesHotel={includesHotel} ticketType={ticketType} />
                    :
                    <ReserveOption value={600} isRemote={isRemote} includesHotel={includesHotel} ticketType={ticketType} />
                  }
                </>
                :
                <></>
              }
            </>
            :
            <>
              {(showOnlinebutton === true) ?
                <ReserveOption value={100} isRemote={isRemote} includesHotel={includesHotel} ticketType={ticketType} />
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
  text-align: center;
`;
