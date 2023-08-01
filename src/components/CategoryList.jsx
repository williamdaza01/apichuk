/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { getChuckNorrisCategories } from "./../Service";
import './CategoryList.css';

const CategoryList = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getChuckNorrisCategories().then((data) => {
      if (data) {
        setCategories(data);
      }
    });
  }, []);

  return (
    <div>
      <h2>Categorías:</h2>
      <ul className="categories_list">
        {categories.map((category) => (
          <li key={category}>
            <button onClick={() => onCategorySelect(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
