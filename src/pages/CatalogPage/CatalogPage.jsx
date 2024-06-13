import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CatalogContainer,
  FilterContainer,
  CarsContainer,
} from './CatalogPage.styled';

import CarsItem from '../../components/CarsItem/CarsItem';
import Filter from '../../components/Filter/Filter';
import { fetchCars } from '../../redux/cars/cars-operations';
import { selectFiltersCars, selectCars } from '../../redux/cars/cars-selectors';
import { v4 as uuid } from 'uuid';
import splitAndCapitalize from '../../helpers/camelCase';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

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
      } catch (error) {}
    }
    fetchedData();
  }, [dispatch, page, totalPage]);

  function filteredByCars() {
    const filtered = displayedCars.filter((item) => {
      const filterLocation =
        !filteredCars.location || item.location === filteredCars.location;

      const locationFilter =
        !filteredCars.type ||
        splitAndCapitalize(item.form) === filteredCars.type;

      return filterLocation && locationFilter;
    });
    return filtered;
  }

  const visibleCars = filteredByCars();

  return (
    <CatalogContainer>
      <FilterContainer>
        <Filter
          handlePage={handlePage}
          setDisplayedCars={setDisplayedCars}
          setFilteredSearch={setFilteredSearch}
        />
      </FilterContainer>
      <CarsContainer>
        {visibleCars && visibleCars.length === 0 && filteredSearch
          ? 'Not search'
          : visibleCars.length > 0
          ? visibleCars?.map((item) => {
              return <CarsItem key={uuid()} item={item} />;
            })
          : cars?.map((item) => {
              return <CarsItem key={uuid()} item={item} />;
            })}
      </CarsContainer>
    </CatalogContainer>
  );
};

export default CatalogPage;
