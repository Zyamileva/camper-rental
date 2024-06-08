import React, { useEffect, useState } from 'react';
import {
  CatalogContainer,
  FilterContainer,
  CarsContainer,
} from './CatalogPage.styled';
import Filter from '../../components/Filter/Filter';
import fetchCars from '../../redux/cars/cars-operations';
import selectFiltersCars from '../../redux/cars/cars-selectors';

const CatalogPage = () => {
  const [displayedCars, setDisplayedCars] = useState([]);

  const [filteredSearch, setFilteredSearch] = useState(false);

  const [showLoadBtn, setShowLoadBtn] = useState(true);

  const filteredCars = useSelector(selectFiltersCars);

  const [page, setPage] = useState(1);

  function handlePage() {
    setPage(1);
  }

  const carsPerPage = 4;
  const limitCarsTotal = 20;
  const totalPage = Math.ceil(limitCarsTotal / carsPerPage);
  useEffect(() => {
    async function fetchedData() {
      try {
        setShowLoadBtn(page < totalPage);
        await dispatch(fetchCars(page)).unwrap();
      } catch (error) {
        console.log(error);
      }
    }
    fetchedData();
  }, [dispatch, page, totalCars]);

  // function filteredByCars() {
  //   displayedCars.filter((item) => {
  //     filteredCars.
  //   });
  // }

  return (
    <CatalogContainer>
      <FilterContainer>
        <Filter
          handlePage={handlePage}
          setDisplayedCars={setDisplayedCars}
          setFilteredSearch={setFilteredSearch}
        />
      </FilterContainer>
      <CarsContainer></CarsContainer>
    </CatalogContainer>
  );
};

export default CatalogPage;
