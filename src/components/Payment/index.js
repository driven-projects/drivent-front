import { useEffect, useState } from 'react';
import {
  ColumRow, Row, Title,
  SectionTitle, StyledDiv,
  InfoTitle, ChoosedTicket,
  EnrollTitle
} from './section';

import SelectingTicketType from './SelectingTicketType/index';
import usePayment from '../../hooks/api/usePayment';
import useEnrollment from '../../hooks/api/useEnrollment';
import { CreditCard } from './creditCard';
import { GreenVerifyer } from './greenVerifyer';
import useTicketByUserId from '../../hooks/api/useTicketByUserId';

export function PaymentPage() {
  const [Paid, SetPaid] = useState('');
  const [Enroll, SetEnroll
  ] = useState('');

  const { getTicket } = usePayment();
  const { getEnrollment } = useEnrollment();

  const { userTicket } = useTicketByUserId();

  useEffect(() => {
    GetPayment();
    getEnroll();
  }, []);

  async function getEnroll() {
    const enrollapi = await getEnrollment();
    SetEnroll(enrollapi.name); 
  }
  async function GetPayment() {
    const payment = await getTicket();
    if(payment.status === 'PAID') {
      SetPaid(payment.status); 
    }
  }
  return (
    <StyledDiv>
      {Enroll? 
      
        <>
          <Row>
            {Paid? 
              <>
                <Row>
                  <Title>Ingresso e pagamento</Title>
                </Row>
                <SectionTitle>
              Ingresso escolhido 
                </SectionTitle>
                <ChoosedTicket>
                  <p className='Title'>Presencial + Com Hotel</p>
                  <p className='Price'>R$ 600</p>
                </ChoosedTicket>
              </>:  
              <SelectingTicketType/>}
          </Row>
          <Row>
            <SectionTitle>
              Pagamento
            </SectionTitle>
            {Paid? 
              <InfoTitle>
                <ColumRow>  
                  <GreenVerifyer></GreenVerifyer>  
                  <Row>
                    <p className='InfoTitle'>Pagamento confirmado</p>
                    <p className='Info'>Prossiga para escolha de hospedagem e atividades</p>
                  </Row>
                </ColumRow>
              </InfoTitle> : 
              <CreditCard></CreditCard>
            }
          </Row>
        </> 
        : 
        <Row>
          <Title>Ingresso e pagamento</Title> 
          <EnrollTitle>
            Você precisa completar sua incrição antes de prosseguir para escolha de ingresso
          </EnrollTitle>
        </Row>
      }
    </StyledDiv>
  );
}

