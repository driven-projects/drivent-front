import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activitiesApi from '../../services/activitiesApi';

export default function useActivities(dateId, spaceId) {
  const token = useToken();
  const {
    data: activites,
    loading: activitesLoading,
    error: activitiesError,
  } = useAsync (() => activitiesApi.getActivities({ token, dateId, spaceId }));

  console.log(activites);
  return {
    activites,
    activitesLoading,
    activitiesError,
  };
}
