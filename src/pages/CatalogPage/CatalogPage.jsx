import React, { useState } from 'react';
import {
  CatalogContainer,
  FilterContainer,
  CarsContainer,
} from './CatalogPage.styled';
import Filter from '../../components/Filter/Filter';

const CatalogPage = () => {
  const [displayedCars, setDisplayedCars] = useState([]);

  const [filteredSearch, setFilteredSearch] = useState(false);

  function handlePage() {
    setPage(1);
  }

  return (
    <CatalogContainer>
      <FilterContainer>
        <Filter
          handlePage={handlePage}
          setDisplayedCars={setDisplayedCars}
          setFilteredSearch={setFilteredSearch}
        />
      </FilterContainer>
      <CarsContainer>JKJJJJJJJJJJJJJJJJJ</CarsContainer>
    </CatalogContainer>
  );
};

export default CatalogPage;
