import { Typography } from '@material-ui/core';
import styled from 'styled-components';

import ActivitieContainer from './ActivitieContainer';

export default function SpacesContainer({ containerInfo }) {
  console.log(containerInfo);
  return (
    <SpacesContainerStyle>
      <SpaceStyle>
        {containerInfo.space.name}
        <SpaceActivities>
          
          <ActivitieContainer activitieInfo={ containerInfo } />

        </SpaceActivities>
      </SpaceStyle>
    </SpacesContainerStyle>
  );
}

const SpacesContainerStyle = styled(Typography)`
  display: flex;
`;

const SpaceStyle = styled(Typography)`
  min-height: 460px;
  width: 288px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: -1px;
`;

const SpaceActivities = styled(Typography)`
  min-height: 440px;
  width: 288px;
  border: 1px solid #d7d7d7;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
