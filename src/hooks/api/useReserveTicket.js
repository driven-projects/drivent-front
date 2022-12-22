import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function useReserveTicket() {
  const token = useToken();

  const {
    loading: reserveTicketLoading,
    error: reserveTicketError,
    act: postReserveTicket
  } = useAsync((data) => ticketApi.reserve(data, token), false);

  return {
    reserveTicketLoading,
    reserveTicketError,
    postReserveTicket
  };
}
