import { useContext, useEffect } from 'react';
import { ProductContext } from '../../context/ProductContext';
import './style.css';
import { ProductList } from './components/ProductList';

export const Product = () => {
  const { products, fetchProducts } = useContext(ProductContext);
  useEffect(() => {
    fetchProducts('/products');
  }, []);
  const allProducts = products.products;
  return (
    <div className='home-top-product'>
      <div className='head-container'>
        <h2>Popular Products </h2>
      </div>
      <div className='product-content'>
        <ProductList data={allProducts} />
      </div>
    </div>
  );
};
