// import styled from 'styled-components';

// function Payment() {
//   return (
//     <>
//       <p> Primeiro, escolha sua modalidade de ingresso </p>

//       <PaymentBoxesContainer>
//         <ModalityBox
//           selected={selectedTicketModality === 'presential' ? true : false}
//           onClick={() => {
//             clickHandler('presential');
//           }}
//         >
//           <Modality>Presencial</Modality>
//           <Price>R$ {event.presentialPrice}</Price>
//         </ModalityBox>

//         <ModalityBox
//           selected={selectedTicketModality === 'online' ? true : false}
//           onClick={() => {
//             clickHandler('online');
//           }}
//         >
//           <Modality>Online</Modality>
//           <Price>R$ {event.onlinePrice}</Price>
//         </ModalityBox>
//       </PaymentBoxesContainer>
//     </>
//   );
// }

// export default Payment;

// const ModalityBox = styled.button`
//   all: unset;
//   width: 10vw;
//   max-width: 145px;

//   height: 10vw;
//   max-height: 145px;

//   border-radius: 20px;

//   border: ${(props) => props.selected || '1px solid #CECECE'};

//   background-color: ${(props) => props.selected && '#FFEED2'};

//   display: flex;
//   flex-direction: column;

//   align-items: center;
//   justify-content: center;

//   :hover {
//     cursor: pointer;
//   }
// `;

// const Modality = styled.h2`
//   color: #454545;
//   font-size: 16px;
//   line-height: 25px;
// `;

// const Price = styled.span`
//   color: #898989;
//   font-size: 14px;
//   line-height: 16px;
// `;

// const PaymentBoxesContainer = styled.div`
//   width: auto;
//   height: 145px;

//   display: flex;

//   gap: 24px;
// `;
