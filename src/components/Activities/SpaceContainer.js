import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export default function SpacesContainer() {
  const activiesDuration = 2;
  return (
    <SpacesContainerStyle>
      <SpaceStyle>
        Nome do Espaço
        <SpaceActivities>
          <ActivitieStyle duration={activiesDuration}>
            Corte e Costura
          </ActivitieStyle>
          
          <ActivitieStyle>
            Crochet com Zezé
          </ActivitieStyle>
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

const ActivitieStyle = styled(Typography)`
  min-height: 80px;
  height: ${props => props.duration * 80}px;
  width: 265px;
  margin-top: 10px!important;
  background: #F1F1F1;
  border-radius: 5px;
`;
