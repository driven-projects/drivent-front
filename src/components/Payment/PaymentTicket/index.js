import TicketChoosed from './TicketChoosed';
import CardForPayment from './CardForPayment';
import useTicket from '../../../hooks/api/useTicket';

export default function PaymentTicket( { Paid, SetPaid } ) {
  const { ticket, ticketError, ticketLoading } = useTicket();
  return (
    <>
      <TicketChoosed ticket={ ticket } ticketError={ ticketError } ticketLoading={ ticketLoading }/>
      <CardForPayment ticket={ ticket } Paid={ Paid } SetPaid={ SetPaid }/>
    </>
  );
}
