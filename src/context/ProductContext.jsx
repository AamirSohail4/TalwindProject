import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import { fetchRecordApi, fetchRecordsApi } from '../axios';

export const ProductContext = createContext({
  products: [],
  product: [],
  fetchproduct: () => {},
  fetchProducts: () => {},
});

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const fetchProducts = async (path) => {
    const res = await fetchRecordsApi(path);
    // console.log(res.data.products);
    if (res.status === 200) {
      setProducts(res.data);
    }
  };

  const fetchproduct = async (id) => {
    console.log(id);
    const res = await fetchRecordApi(`/products/${id}`);
    if (res.status === 200) {
      setProduct(res.data);
    }
  };
  return (
    <ProductContext.Provider
      value={{ products, product, fetchProducts, fetchproduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
ProductContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
