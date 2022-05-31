import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function useGetTicket() {
  const token = useToken();

  const {
    data: tickets,
    loading: ticketsLoading,
    error: ticketsError,
    act: getTickets,
  } = useAsync(() => ticketApi.get(token, 1));

  return {
    tickets,
    ticketsLoading,
    ticketsError,
    getTickets,
  };
}
