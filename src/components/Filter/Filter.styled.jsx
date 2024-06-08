import styled from 'styled-components';
import { interFont, primaryFont } from '../fonts';
import { IoLocationOutline } from 'react-icons/io5';

export const FormWrapper = styled.form`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  max-width: 360px;
  width: 100%;

  @media (min-width: 448px) {
    width: 360px;
  }

  @media (min-width: 1440px) {
    gap: 10px;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const SelectedLocation = styled.div``;

export const InputWrapper = styled.div`
  position: relative;
  max-width: 360px;
`;

export const Label = styled.label`
  line-height: 24px;
  font-weight: 500;
  font-size: 14px;
  font-family: ${interFont};
  color: #101828;
  opacity: 60%;
  margin-top: 320px;
`;

export const Input = styled.div`
  position: relative;
  color: #101828;
  background-color: #f7f7f7;
  padding: 18px;
  border-radius: 10px;
  border: none;
  outline: none;
`;

export const LocationIcon = styled(IoLocationOutline)`
  width: 18px;
  height: 20px;
`;

export const SelectedItem = styled.div``;

export const EquipmentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const EquipmentSubTitle = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #475467;
`;

export const EquipmentTitle = styled.h2`
  color: #101828;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #101828;
  opacity: 10%;
`;

export const SelectedOption = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 150px;
  position: absolute;
  top: 100%;
  left: 0;
  box-shadow: 0 4px 36px 0 rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 1px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  border-radius: 8px;
  background-color: gray;
`;

export const SelectedEquipmentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 8px;
  /* flex-direction: column; */
`;

export const SelectedEquipment = styled.div`
  display: flex;
  border-radius: 10px;
  border: solid 1px #101828;
  width: 112px;
  height: 95px;
  padding: 17px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SelectedEquipmenIcon = styled.div`
  font-size: 1.8rem;
  opacity: 100%;
  color: #000000;
`;

export const SelectedEquipmenText = styled.div`
  opacity: 100%;
  color: #000000;
`;

export const FormButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const FormSearchBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  border-radius: 200px;
  padding: 16px 60px;
  width: 173px;
  height: 56px;

  color: white;
  /* transition: var(--primary-transition); */

  background-color: red;

  &:hover {
    background-color: pink;
    cursor: pointer;
  }
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
`;
