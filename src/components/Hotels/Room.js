import styled from 'styled-components';

export default function Room({ room: { id, name, capacity }, selected: { selectedRoom, setSelectedRoom } }) {
  return (
    <RoomContainer selected={selectedRoom===id} onClick={() => setSelectedRoom(id)}>
      <h5>
        {name}
      </h5>
      <div>
        {capacity}
      </div>
    </RoomContainer>
  );
}

const RoomContainer = styled.div`
  width: 190px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 15px 15px 15px;
  border: 1px solid #CECECE;
  border-radius: 10px;
  padding: 10px 10px 10px 16px;
  background-color: ${props => (props.selected)? '#FFEED2;' : '#FFFFFF;'};
`;
