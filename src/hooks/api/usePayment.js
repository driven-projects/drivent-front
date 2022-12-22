import useAsync from '../useAsync';
import useToken from '../useToken';

import * as paymentApi from '../../services/paymentApi';

export default function usePayment() {
  const token = useToken();
  
  const {
    data: ticket,
    act: getTicket
  } = useAsync(() => paymentApi.getTicketInfo(token));
  
  return {
    ticket,
    getTicket
  };
}
