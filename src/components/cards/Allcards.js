
import "./allcard.css";
import Card from "./Card";
import React, { useState } from 'react';
import DummyData from '../data/Data';
import FilterOptions from '../filter/Filter';
import { SvgIcon } from '@mui/material';
import FilterModal from '../filter/FilterModal';
import TuneIcon from '@mui/icons-material/Tune';


const TypeIconMap = {
  tune: <SvgIcon component={TuneIcon} style={{ color: 'gray' }} />,
}

export default function Allcard() {
  const [filter, setFilter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({ price: '', location: '', type: '' });
  const [visibleHotels, setVisibleHotels] = useState(10);

  const types = Array.from(new Set(DummyData.map((hotel) => hotel.type)));

  const filteredData = filter
    ? DummyData.filter((hotel) => hotel.type === filter)
    : DummyData.slice(0, visibleHotels);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleApplyFilters = (filters) => {
    setAppliedFilters(filters);
    handleCloseModal();
  };

  const handleLoadMore = () => {
    setVisibleHotels((prevVisibleHotels) => prevVisibleHotels + 10);
  };

 

  return (
    <div>
      <hr></hr>
      <div className="completefilter">
        <div className="filterdiv">
          <FilterOptions types={types} onSelect={(selectedType) => setFilter(selectedType)} />
          <div className="filterbutton">
            <button onClick={handleOpenModal}>{TypeIconMap['tune']} Filters</button>
          </div>
        </div>
      </div>
      <div className="allcards">
        {filteredData.map((hotel, index) => (
        <>
          <Card key={index} {...hotel} />
        </>
        ))}
      </div>

      {filteredData.length < DummyData.length && (
        <div className="load-more-button">
          <h3> Continue Exploring</h3>
          <br />
          <button onClick={handleLoadMore}>Show More</button>
        </div>
      )}
      <br/><br/><br/><br/><br/>

      {isModalOpen && (
        <FilterModal onClose={handleCloseModal} onApplyFilters={handleApplyFilters} />
      )}
    </div>
  );
}
