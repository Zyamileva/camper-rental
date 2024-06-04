import React from 'react';
import locationInfo from '../../../location.json';
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { MdOutlineAir } from 'react-icons/md';
import { TbAutomaticGearbox, TbToolsKitchen2 } from 'react-icons/tb';
import { PiTelevisionSimple } from 'react-icons/pi';
import { LuShowerHead } from 'react-icons/lu';
import { TbCamper } from 'react-icons/tb';
// import { fetchAllCars } from '../../redux/cars/operations';
// import { MdOutlineAir } from 'react-icons/md';
// import { TbAutomaticGearbox, TbToolsKitchen2 } from 'react-icons/tb';
// import { PiTelevisionSimple } from 'react-icons/pi';
// import { LuShowerHead } from 'react-icons/lu';
// import { TbCamper } from 'react-icons/tb';
// import { setLocation, setEquipment, setType } from '../../redux/cars/slice';
import {
  FormWrapper,
  FilterWrapper,
  InputWrapper,
  Label,
  Input,
  LocationIcon,
  SelectedOption,
  EquipmentWrapper,
  EquipmentSubTitle,
  EquipmentTitle,
  Line,
  SelectedEquipmentWrapper,
  SelectedEquipment,
  SelectedEquipmenIcon,
  SelectedEquipmenText,
  FormButtonsWrapper,
  FormSearchBtn,
} from './Filter.styled';

// eslint-disable-next-line react/prop-types
function Filter({ handlePage, setDisplayedCars, setFilteredSearch }) {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedEquipment, setSelectedEquipment] = useState('');
  // const [selectedEquipment, setSelectedEquipment] = useState('');
  // const [selectedType, setSelectedType] = useState('');

  const [isOpen, setIsOpen] = useState(false);

  // const dispatch = useDispatch();

  // const handleEquipmentFilter = (e) => {
  //   const equipment = e.target.innerText;
  //   setSelectedEquipment(equipment);
  // };

  // const handleTypeFilter = (e) => {
  //   const type = e.target.innerText;
  //   setSelectedType(type);
  // };

  const handleOptionClick = (location) => {
    setSelectedLocation(location);
    setIsOpen(false);
  };

  // const resetFilters = async () => {
  //   setSelectedLocation('');
  //   setSelectedEquipment('');
  //   setSelectedType('');

  //   const allCarsResponse = await dispatch(fetchAllCars());
  //   setDisplayedCars(allCarsResponse.payload);

  //   dispatch(setLocation(''));
  //   dispatch(setEquipment(''));
  //   dispatch(setType(''));

  //   setFilteredSearch(false);
  // };

  // const handleReset = () => {
  //   resetFilters();
  //   handlePage();
  // };

  async function handleSubmit(e) {
    e.preventDefault();

    // const formData = {
    //   location: selectedLocation,
    //   selectedEquipment: selectedEquipment,
    //   selectedType: selectedType,
    // };

    // const allCarsResponse = await dispatch(fetchAllCars());
    // setDisplayedCars(allCarsResponse.payload);

    // setFilteredSearch(true);

    // dispatch(setLocation(formData.location));
    // dispatch(setEquipment(formData.selectedEquipment));
    // dispatch(setType(formData.selectedType));

    // handlePage();
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FilterWrapper>
        <InputWrapper>
          <Label htmlFor="location">Location</Label>
          <Input onClick={() => setIsOpen(!isOpen)}>
            <LocationIcon />
            <span>{selectedLocation || ''}</span>
          </Input>
          {isOpen && (
            <SelectedOption>
              {locationInfo?.map((elem) => (
                <SelectedItem key={elem} onClick={() => handleOptionClick}>
                  {elem}
                </SelectedItem>
              ))}
            </SelectedOption>
          )}
        </InputWrapper>
        <EquipmentWrapper>
          <EquipmentSubTitle>Filters</EquipmentSubTitle>
          <EquipmentTitle>Vehicle equipment</EquipmentTitle>
          <Line></Line>
          <SelectedEquipmentWrapper>
            <SelectedEquipment $active={selectedEquipment === 'AC'}>
              <SelectedEquipmenIcon>
                <MdOutlineAir />
              </SelectedEquipmenIcon>
              <SelectedEquipmenText>AC</SelectedEquipmenText>
            </SelectedEquipment>
            <SelectedEquipment $active={selectedEquipment === 'Automatic'}>
              <SelectedEquipmenIcon>
                <TbAutomaticGearbox />
              </SelectedEquipmenIcon>
              <SelectedEquipmenText>Automatic</SelectedEquipmenText>
            </SelectedEquipment>
            <SelectedEquipment $active={selectedEquipment === 'Kitchen'}>
              <SelectedEquipmenIcon>
                <TbToolsKitchen2 />
              </SelectedEquipmenIcon>
              <SelectedEquipmenText>Kitchen</SelectedEquipmenText>
            </SelectedEquipment>
            <SelectedEquipment $active={selectedEquipment === 'TV'}>
              <SelectedEquipmenIcon>
                <PiTelevisionSimple />
              </SelectedEquipmenIcon>
              <SelectedEquipmenText>TV</SelectedEquipmenText>
            </SelectedEquipment>
            <SelectedEquipment $active={selectedEquipment === 'Shower/WC'}>
              <SelectedEquipmenIcon>
                <LuShowerHead />
              </SelectedEquipmenIcon>
              <SelectedEquipmenText>Shower/WC</SelectedEquipmenText>
            </SelectedEquipment>
          </SelectedEquipmentWrapper>

          <EquipmentTitle>Vehicle equipment</EquipmentTitle>
          <Line></Line>
          <SelectedEquipmentWrapper>
            <SelectedEquipment $active={selectedEquipment === 'Van'}>
              <SelectedEquipmenIcon>
                <TbCamper />
              </SelectedEquipmenIcon>
              <SelectedEquipmenText>Van</SelectedEquipmenText>
            </SelectedEquipment>
            <SelectedEquipment
              $active={selectedEquipment === 'Fully Integrated'}
            >
              <SelectedEquipmenIcon>
                <TbCamper />
              </SelectedEquipmenIcon>
              <SelectedEquipmenText>Fully Integrated</SelectedEquipmenText>
            </SelectedEquipment>
            <SelectedEquipment $active={selectedEquipment === 'Alcove'}>
              <SelectedEquipmenIcon>
                <TbCamper />
              </SelectedEquipmenIcon>
              <SelectedEquipmenText>Alcove</SelectedEquipmenText>
            </SelectedEquipment>
          </SelectedEquipmentWrapper>
        </EquipmentWrapper>
      </FilterWrapper>
      <FormButtonsWrapper>
        <FormSearchBtn type="submit">Search</FormSearchBtn>
      </FormButtonsWrapper>
    </FormWrapper>
  );
}

export default Filter;
