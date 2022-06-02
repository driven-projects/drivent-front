import { Box, Button, Typography } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import usePayment from '../../../hooks/usePayment';
import OptionButton from './Option';
import CardForm from './CreditCard';

export default function PaymentForm() {
  const { paymentInfo } = usePayment();
  const [paymentForm, setPaymentForm] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });

  return (
    <Box>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <Box>
        <StyledTypography variant="h6" color="textSecondary">
          Ingresso escolhido
        </StyledTypography>
        <OptionButton
          title={`${paymentInfo.type} + valor`}
          body={`valor`}
          value="presential"
          disabled
          isSelected={true}
        />
      </Box>
      <Box>
        <StyledTypography variant="h6" color="textSecondary">
          Pagamento
        </StyledTypography>
        <CardForm />
      </Box>
    </Box>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
