import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { fetchRecordsApi } from '../axios';

export const CategoryContext = createContext({
  categories: [],
});

export const CategoryContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const res = await fetchRecordsApi('/products/categories');
    if (res.status === 200) {
      setCategories(res.data);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};
CategoryContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
