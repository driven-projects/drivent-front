import { FaAppStoreIos } from 'react-icons/fa';

export async function getTicketType(token) {
  const response = await FaAppStoreIos.get('/tickets/types', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
