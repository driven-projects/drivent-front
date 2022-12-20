import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import TicketChoosed from './TicketChoosed';
import CardForPayment from './CardForPayment';
import useTicket from '../../../hooks/api/useTicket';

export default function PaymentTicket( ) {
  const { ticket, ticketError, ticketLoading } = useTicket();
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <TicketChoosed ticket={ ticket } ticketError={ ticketError } ticketLoading={ ticketLoading }/>
      <CardForPayment ticket={ ticket } />
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
