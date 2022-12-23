import useAsync from '../useAsync';
import useToken from '../useToken';
import * as bookingApi from '../../services/bookingApi';

export function useGetBooking() {
  const token = useToken();
  const {
    data: booking,
    loading: bookingsLoading,
    error: bookingError,
    act: getBookings
  } = useAsync(() => bookingApi.getBookings( token ));

  return {
    booking,
    getBookings,
    bookingsLoading,
    bookingError,
  };
}
export function usePostBooking(roomId) {
  const token = useToken();

  const {
    loading: postBookingLoading,
    error: postBookingError,
    act: postBooking
  } = useAsync(() => bookingApi.postBookings({ roomId, people: 0 }, token));

  return {
    postBookingLoading,
    postBookingError,
    postBooking,
  };
}

