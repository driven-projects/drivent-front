/* eslint-disable no-console */
import { useState } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import OptionButton from './Option';
import useToken from '../../../hooks/useToken';
import usePayment from '../../../hooks/usePayment';
import useTicket from '../../../hooks/api/useTicket';
import Button from '../../Form/Button';
import { toast } from 'react-toastify';

export default function PaymentPage() {
  const { token } = useToken();
  const { paymentInfo, handleChange } = usePayment();
  const { loadingTicketReservation, reserveTicket } = useTicket();

  const [isReservationReady, setIsReservationReady] = useState(false);

  function renderSummary() {
    if (paymentInfo.type === 'online' || (paymentInfo.type === 'presential' && paymentInfo.hotel !== null))
      return (
        <Box>
          <StyledTypography variant="h6" color="textSecondary">
            Fechado! O total ficou em R$ {paymentInfo.type === 'online' ? '100,00' : paymentInfo.hotel ? '600' : '250'}.
            Agora é só confirmar:
          </StyledTypography>
          <Button onClick={() => setIsReservationReady(true)}>Reservar ingresso</Button>
        </Box>
      );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await reserveTicket(paymentInfo, token);
    } catch (error) {
      toast('Não foi possível reservar o ingresso!');
    }
  }

  if(isReservationReady) return 'pagamento'
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
      {paymentInfo.type === 'online' ? (
        ''
      ) : (
        <Box marginBottom="44px">
          <StyledTypography variant="h6" color="textSecondary">
            Ótimo! Agora escolha sua modalidade de hospedagem
          </StyledTypography>
          <ButtonContainer>
            <OptionButton
              title={'com hotel'}
              body={'+ R$ 0'}
              value="presential"
              isSelected={paymentInfo.hotel === false}
              onClick={(e) => {
                handleChange('hotel', false);
              }}
            />
            <OptionButton
              title={'com hotel'}
              body={'+ R$ 350'}
              value="online"
              isSelected={paymentInfo.hotel === true}
              onClick={(e) => {
                handleChange('hotel', true);
              }}
            />
          </ButtonContainer>
        </Box>
      )}
      {renderSummary()}
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
