/* eslint-disable no-console */
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import OptionButton from './Option';
import usePayment from '../../../hooks/usePayment';

export default function PaymentPage() {
  const { paymentInfo, handleChange } = usePayment();
  return (
    <>
      <Box>
        <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
        <StyledTypography variant="h6" color="textSecondary">
          Primeiro, escolha sua modalidade de ingresso
        </StyledTypography>
        <ButtonContainer>
          <OptionButton
            title={'Presencial'}
            body={'R$ 250,00'}
            isSelected={paymentInfo.type === 'in person'}
            onClick={(e) => {
              handleChange('type', 'in person');
            }}
          />
          <OptionButton
            title={'Online'}
            body={'R$ 100,00'}
            isSelected={paymentInfo.type === 'online'}
            onClick={(e) => {
              handleChange('type', 'online');
            }}
          />
        </ButtonContainer>
      </Box>
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
