import { Routes, Route } from 'react-router-dom';
import { FrontEndLayout } from '../layout/FrontEndLayout';
import { Home } from '../pages/home/Home';
import { Product } from '../pages/product/Product';
import { SingleProduct } from '../pages/product/singleproduct/SingleProduct';
import { ProductByCategory } from '../pages/category/ProductByCategory';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<FrontEndLayout />}>
        <Route index element={<Home />} />
        <Route path='product' element={<Product />} />
        <Route path='shop/:id' element={<SingleProduct />} />
        <Route path='shop/category/:category' element={<ProductByCategory />} />
      </Route>
    </Routes>
  );
};
