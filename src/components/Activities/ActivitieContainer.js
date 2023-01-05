import { Typography } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';

import { RxEnter, RxCrossCircled } from 'react-icons/rx';

export default function ActivitieContainer({ activities }) {
  const [isItFull, setIsItFull] = useState(true);

  const activiesDuration = 2;

  return (
    <ActivitieStyle duration={activiesDuration}>
      <ActivitieInfoBox>

        <ActivitieName>
          Corte e Costura
        </ActivitieName>

        <ActivitieHour>
          09:00 - 10:00
        </ActivitieHour>

      </ActivitieInfoBox>
      
      <ActivitieVacancyBox isItFull={isItFull}>
        {isItFull? <RxEnter /> : <RxCrossCircled />}
        <ActivitieStatus>
            27 vagas
        </ActivitieStatus>
      </ActivitieVacancyBox>
    </ActivitieStyle>
  );
}

const ActivitieStyle = styled(Typography)`
  display: flex;

  min-height: 80px;
  height: ${props => props.duration * 80}px;
  width: 265px;

  margin-top: 10px!important;
  background: #F1F1F1;
  border-radius: 5px;
  padding: 10px 0 10px 10px;
`;

const ActivitieInfoBox = styled(Typography)`
  display: flex;
  flex-direction: column;

  width: 200px;
  height: 100%;
  border-right: 1px solid #CFCFCF;
`;

const ActivitieVacancyBox = styled(Typography)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 65px;
  color: ${props => (props.isItFull)? '#078632;' : '#CC6666;'};
`;

const ActivitieName = styled(Typography)`
  font-size: 12px!important;
  font-weight: 700!important;
`;

const ActivitieHour = styled(Typography)`
  font-size: 12px!important;
  font-weight: 400!important;
`;

const ActivitieStatus = styled(Typography)`
  font-size: 9px!important;
  font-weight: 400!important;
`;
