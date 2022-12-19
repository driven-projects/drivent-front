import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import useTicketType from '../../hooks/api/useTicket';

export default function PaymentScreen() {
// const { payment, paymentError, paymentLoading } = usePayment();
  const { ticketType } = useTicketType();
  
  //A SER DELETADO E TROCADO PELAS RESPOSTAS DA API  
  let payment = false;
  let isRemote = true;

  if(payment === true)
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

  if(ticketType.isRemote === true)
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
