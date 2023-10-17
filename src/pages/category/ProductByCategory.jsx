import { useContext, useEffect } from 'react';
import { ProductList } from '../product/components/ProductList';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';

export const ProductByCategory = () => {
  const { category } = useParams();
  const { products, fetchProducts } = useContext(ProductContext);
  useEffect(() => {
    fetchProducts(`/products/category/${category}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem',
      }}
    >
      <ProductList data={products.products} />;
    </div>
  );
};
