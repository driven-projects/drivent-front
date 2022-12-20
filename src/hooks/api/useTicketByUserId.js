import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function useTicketByUserId() {
  const token = useToken();
    
  const {
    data: userTicket,
    loading: userTicketLoading,
    error: userTicketError
  } = useAsync((data) => ticketApi.reserve(data, token), false);

  return {
    userTicket,
    userTicketLoading,
    userTicketError
  };
}
