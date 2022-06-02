import React from 'react';
import useForm from '../../../hooks/userCardForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Box, FormControl, FormLabel, TextField } from '@material-ui/core';
import Button from '../../Form/Button';

export default function CardForm() {
  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();

  return (
    <>
      <Box sx={{ display: 'flex', gap: 30 }}>
        <Box>
          <Cards
            cvc={values.cardSecurityCode}
            expiry={values.cardExpiration}
            focused={values.focus}
            name={values.cardName}
            number={values.cardNumber}
          />
        </Box>
        <Box>
          <FormControl>
            <TextField sx={style.cardInput} label="Card Number" variant="outlined"></TextField>
            <FormLabel>E.g.: 49..., 51..., 36..., 37...</FormLabel>
            <TextField sx={style.cardInput} label="Name" variant="outlined"></TextField>
            <Box sx={{ display: 'flex' }}>
              <TextField sx={style.cardInput} label="Valid Thru" variant="outlined"></TextField>
              <TextField sx={style.cardInput} label="CVC" variant="outlined"></TextField>
            </Box>
          </FormControl>
        </Box>
      </Box>
      <Button>Finalizar Pagamento</Button>
    </>
  );
}

const style = {
  cardInput: {
    margin: '0 0 10px 0',
    border: '1px solid red',
  },
};
