/* eslint-disable no-console */
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import OptionButton from './Option';
import useToken from '../../../hooks/useToken';
import usePayment from '../../../hooks/usePayment';
import useTicket from '../../../hooks/api/useTicket'
import Button from '../../Form/Button';
import { toast } from 'react-toastify';

export default function PaymentPage() {
  const  { token } = useToken();
  const { paymentInfo, handleChange } = usePayment();
  const { loadingTicketReservation, reserveTicket } = useTicket();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await reserveTicket(paymentInfo, token);
    } catch (error) {
      toast('Não foi possível reservar o ingresso!')
    }
  }

  return (
    <>
      <Box marginBottom="44px">
        <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
        <StyledTypography variant="h6" color="textSecondary">
          Primeiro, escolha sua modalidade de ingresso
        </StyledTypography>
        <ButtonContainer>
          <OptionButton
            title={'Presencial'}
            body={'R$ 250,00'}
            value="presential"
            isSelected={paymentInfo.type === 'presential'}
            onClick={(e) => {
              handleChange('type', 'presential');
            }}
          />
          <OptionButton
            title={'Online'}
            body={'R$ 100,00'}
            value="online"
            isSelected={paymentInfo.type === 'online'}
            onClick={(e) => {
              handleChange('type', 'online');
            }}
          />
        </ButtonContainer>
      </Box>
      {paymentInfo.type ? (
        <Box>
          <StyledTypography variant="h6" color="textSecondary">
            Fechado! O total ficou em R$ {paymentInfo.type === 'online' ? '100,00' : '250,00'}. Agora é só confirmar:
          </StyledTypography>
          <Button onClick={(e) => handleSubmit(e)}>Reservar ingresso</Button>
        </Box>
      ) : (
        ''
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const ButtonContainer = styled(Box)`
  display: flex;
  gap: 24px;
`;
