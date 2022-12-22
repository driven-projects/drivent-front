import useAsync from '../useAsync';
import useToken from '../useToken';

import * as BookingsApi from '../../services/bookingApi';

export default function useBooking() {
  const token = useToken();
  const {
    data: booking,
    loading: bookingsLoading,
    error: bookingError,
    act: getBookings
  } = useAsync(() => BookingsApi.getBookings({ token }));

  return {
    booking,
    getBookings,
    bookingsLoading,
    bookingError,
  };
}
