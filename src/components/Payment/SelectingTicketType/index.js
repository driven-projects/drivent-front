import PaymentTicket from '../PaymentTicket';
import useEnrollment from '../../../hooks/api/useEnrollment';

export default function SelectingTicketType( ) {
  const { enrollment } = useEnrollment();
  /*if(!enrollment)
    return(
      <StyledCenteredText>
        <StyledTypography variant="h6">
          Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso
        </StyledTypography>
      </StyledCenteredText>
    );*/

  return (
    <>
      <PaymentTicket></PaymentTicket>
    </>
  );
}
