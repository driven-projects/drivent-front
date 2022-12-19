import { 
  Row, Title,
  SectionTitle, StyledDiv,
  InfoTitle, ChoosedTicket
} from '../../../components/Payment';
import { useEffect, useState } from 'react';
import usePayment from '../../../hooks/api/usePayment';
import useEnrollment from '../../../hooks/api/useEnrollment';

export default function Payment() {
  const [Paid, SetPaid] = useState('');
  const [Enroll, SetEnroll] = useState('');

  const { ticket, getTicket } = usePayment();
  const { enrollment, getEnrollment } = useEnrollment();

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
    SetPaid(payment.status); 
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
            <InfoTitle> Prossiga para o pagamento </InfoTitle>
          }
        </Row>
      </> 
        : <Title>Voce Precisa completar o login</Title> 
        
      }
      
    </StyledDiv>
  );
}
