import styled from 'styled-components';

export default function Hotel({ hotel: { id, name, image }, selected: { selected, setSelected } }) {
  return (
    <HotelContainer selected={selected===id} onClick={() => setSelected(id)}>
      <img src={image} alt='' />
      <h4>{name}</h4>
    </HotelContainer>
  );
}

const HotelContainer = styled.div`
  width: 196px;
  height: 264px;
  background-color: ${props => (props.selected)? '#FFEED2;' : '#EBEBEB;'};
  border-radius: 10px;
  margin-right: 19px;
  padding: 16px 14px 16px 14px;
  h4 {
    margin-top: 10px;
    color: #343434;
    font-size: 20px;
  }
  img {
    width: 168px;
    height: 109px;
    border-radius: 5px;
  }
`;
