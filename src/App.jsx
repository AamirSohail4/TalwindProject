import { CategoryContextProvider } from './context/CategoryContext';
import { ProductContextProvider } from './context/ProductContext';
import { Router } from './router/Router';

export const App = () => {
  return (
    <ProductContextProvider>
      <CategoryContextProvider>
        <Router />
      </CategoryContextProvider>
    </ProductContextProvider>
  );
};
