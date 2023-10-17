import { Category } from '../category/category';
import { Product } from '../product/Product';

export const Home = () => {
  return (
    <div className='main-layout'>
      <Category />
      <Product />
    </div>
  );
};
