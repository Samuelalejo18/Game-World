/* eslint-disable radix */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

import '../styles/filter.css';

function Filters({ SetFilters, filters }) {
  useEffect(() => {
    const rangeInput = document.querySelectorAll('.range-input input');
    const priceInput = document.querySelectorAll('.price-input input');
    const range = document.querySelector('.slider .progress');
    const priceGap = 100;

    const handlePriceInput = (e) => {
      const minPrice = Math.min(500, parseInt(priceInput[0].value));
      const maxPrice = Math.min(500, parseInt(priceInput[1].value));

      if (maxPrice - minPrice >= priceGap && maxPrice <= 500) {
        if (e.target.className === 'input-min') {
          rangeInput[0].value = minPrice;
          range.style.left = `${(minPrice / 500) * 100}%`;
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = `${100 - (maxPrice / 500) * 100}%`;
        }
      }
    };

    const handleRangeInput = (e) => {
      const minVal = Math.min(500, parseInt(rangeInput[0].value));
      const maxVal = Math.min(500, parseInt(rangeInput[1].value));

      if (maxVal - minVal < priceGap) {
        if (e.target.className === 'range-min') {
          rangeInput[0].value = Math.max(0, maxVal - priceGap);
        } else {
          rangeInput[1].value = Math.min(500, minVal + priceGap);
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = `${(minVal / 500) * 100}%`;
        range.style.right = `${100 - (maxVal / 500) * 100}%`;
      }
    };

    priceInput.forEach((input) => {
      input.addEventListener('input', handlePriceInput);
    });

    rangeInput.forEach((input) => {
      input.addEventListener('input', handleRangeInput);
    });
  }, []);

  const handleFilter = (e) => {
    SetFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const [category, setCategory] = useState({
    Console: false,
    Controll: false,
  });

  return (
    <div className="d-flex">
      <div className="wrapper">
        <header>
          <h2>Price Range</h2>
          <p>Use slider or enter min and max price</p>
        </header>
        <div className="price-input">
          <div className="field">
            <span>Min</span>
            <input type="number" className="input-min" defaultValue={250} />
          </div>
          <div className="separator">-</div>
          <div className="field">
            <span>Max</span>
            <input type="number" className="input-max" defaultValue={500} />
          </div>
        </div>
        <div className="slider">
          <div className="progress" />
        </div>
        <div className="range-input">
          <input
            type="range"
            className="range-min"
            min={0}
            max={500}
            defaultValue={250}
            step={10}
            name="minPrice"
            onChange={(e) => handleFilter(e)}
          />
          <input
            type="range"
            className="range-max"
            min={0}
            max={500}
            defaultValue={500}
            step={10}
            name="maxPrice"
            onChange={(e) => handleFilter(e)}
          />
        </div>
      </div>
      <div className="wrapper">
        <header>
          <h2>Category</h2>
          <p>Filter by your favorite category</p>
        </header>
        <div className="py">
          <label>
            <input onClick={(e) => handleFilter(e)} type="radio" className="option-input radio" name="category" id="category" value="all" defaultChecked="" />
            all
          </label>
          <label>
            <input onClick={(e) => handleFilter(e)} type="radio" className="option-input radio" name="category" id="category" value="Console" />
            Console
          </label>
          <label>
            <input onClick={(e) => handleFilter(e)} type="radio" className="option-input radio" name="category" id="category" value="Controll" />
            Controller
          </label>
        </div>

      </div>
    </div>
  );
}

export default Filters;
