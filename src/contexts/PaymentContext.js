import { createContext, useState } from 'react';

const PaymentContext = createContext();
export default PaymentContext;

export function PaymentProvider({ children }) {
  const [paymentInfo, setPaymentInfo] = useState({
    type: null,
    hotel: null,
    cardData: null,
  });

  function handleChange(key, value) {
    const isValid = validateKeyValuePair(key, value);
    if (!isValid) {
      return;
    }
    if (paymentInfo[key] === value) {
      return setPaymentInfo({ ...paymentInfo, [key]: null });
    }
    setPaymentInfo({ ...paymentInfo, [key]: value });
  }

  return (
    <PaymentContext.Provider value={{ paymentInfo, setPaymentInfo, handleChange }}>{children}</PaymentContext.Provider>
  );
}

function validateKeyValuePair(key, value) {
  if (key === 'type' && value !== 'in person' && value !== 'online') {
    return false;
  } else if (key === 'hotel' && value !== 'with' && value !== 'without') {
    return false;
  }
  return true;
}
