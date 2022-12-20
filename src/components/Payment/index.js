import { useEffect, useState } from 'react';
import {
  Row, Title,
  SectionTitle, StyledDiv,
  InfoTitle, ChoosedTicket
} from './section';
import usePayment from '../../hooks/api/usePayment';
import useEnrollment from '../../hooks/api/useEnrollment';
import { CreditCard } from './creditCard';

export function PaymentPage() {
  const [Paid, SetPaid] = useState('');
  const [Enroll, SetEnroll] = useState('');

  const { getTicket } = usePayment();
  const { getEnrollment } = useEnrollment();

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
      {Enroll? <>
        <Row>
          <Title>Ingresso e pagamento</Title>
        </Row>
        <Row>
          <SectionTitle>
              Ingresso escolhido 
          </SectionTitle>
          <ChoosedTicket>
            <p className='Title'>Presencial + Com Hotel</p>
            <p className='Price'>R$ 600</p>
          </ChoosedTicket>
          
        </Row>
        <Row>
          <SectionTitle>
            Pagamento
          </SectionTitle>
          {Paid? 
            <InfoTitle>
                  Pagamento confirmado
              <p className='Info'>Prossiga para escolha de hospedagem e atividades</p>
            </InfoTitle> : 
            <CreditCard></CreditCard>
          }
        </Row>
      </> 
        : 
        <>
          <Title>Ingresso e pagamento</Title> 
          <InfoTitle>
            Você precisa completar sua incrição antes de prosseguir para escolha de ingresso
          </InfoTitle>
        </>
      }
      
    </StyledDiv>
  );
}

