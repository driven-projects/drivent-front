import { Typography } from '@material-ui/core';
import styled from 'styled-components';
// import useTicketByUserId from '../../hooks/api/useTicketByUserId';

export default function PaymentScreen() {
  // const { userTicket, userTicketLoading, userTicketError } = useTicketByUserId();
  
  //A SER DELETADO E TROCADO PELAS RESPOSTAS DA API  
  let userTicket = { isRemote: true, status: 'RESERVED' };

  // if(userTicket.isRemote === true && !userTicketLoading && !userTicketError)
  if(userTicket.isRemote === true)
    return (
      <>
        <StyledTypography variant="h4">Escolha de atividades</StyledTypography>

        <StyledCenteredText>
          <StyledTypography variant='h6'>
            Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.
          </StyledTypography>
        </StyledCenteredText>
      </>
    );

  if(userTicket.status === 'RESERVED')
    return (
      <>
        <StyledTypography variant="h4">Escolha de atividades</StyledTypography>

        <StyledCenteredText>
          <StyledTypography variant='h6'>
            Você precisa ter confirmado pagamento antes de fazer a escolha de atividades
          </StyledTypography>
        </StyledCenteredText>
      </>
    );

  return (
    <>
    </>
  );
}

const StyledCenteredText = styled(Typography)`
  height: 80%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
