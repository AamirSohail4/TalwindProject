import { useContext, useEffect } from 'react';
import './relsatedproduct.css';
import { ProductContext } from '../../../context/ProductContext';
import { ProductList } from '../components/ProductList';

// eslint-disable-next-line react/prop-types
export const RelatedProducts = ({ category }) => {
  const { product, fetchproduct } = useContext(ProductContext);
  useEffect(() => {
    if (category) {
      fetchProducts(`/products/category/${category}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);
  const relatedProduct = products.products;
  return (
    <div className='related-product-container'>
      <div className='home-top-product'>
        <div className='head-container'>
          <h2>Popular Products </h2>
        </div>
        <div className='product-content'>
          <ProductList data={relatedProduct} />
        </div>
      </div>
    </div>
  );
};
