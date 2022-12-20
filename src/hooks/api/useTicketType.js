import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export async function useTicketType() {
  const token = useToken();

  const {
    data: ticketType,
    act: getTicketType
  } = useAsync(() => ticketApi.getTicketType(token));

  return {
    ticketType,
    getTicketType
  };
}
