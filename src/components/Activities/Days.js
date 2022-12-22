import styled from 'styled-components';

export default function Days({ day }) {
  return (
    <DayStyled>
      <h6>
        {day?.name}, {day?.date}
      </h6>
    </DayStyled>
  );
}

const DayStyled = styled.div`
  min-width: 130px;
  height: 40px;
  background-color: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin: 0 10px;
  padding: 0 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  h6 {
    font-size: 14px;
  }
`;
