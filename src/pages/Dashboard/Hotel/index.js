import { useEffect, useState } from 'react';
import useEnrollment from '../../../hooks/api/useEnrollment';
import ChooseHotel from '../../../components/Hotels/HotelChoosing';
export default function Hotel() {
  // const { enrollment, getEnrollment } = useEnrollment();
  // const [Enroll, SetEnroll] = useState('');
  // useEffect(() => {
  //   getEnroll();
  // }, []);

  // async function getEnroll() {
  //   const enrollapi = await getEnrollment();
  //   SetEnroll(enrollapi.name); 
  // }
  return (
    <ChooseHotel />
  );
}
