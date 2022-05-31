/*eslint-disable*/

import styled from 'styled-components';

export default function MissingStep({message}) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Message = styled.span`
  display: flex;

  min-height: 46px;
  max-width: 388px;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  color: #8e8e8e;
  border-radius: nullpx;
`;
