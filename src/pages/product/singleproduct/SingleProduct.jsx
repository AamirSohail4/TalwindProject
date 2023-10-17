import './single.css';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../../../context/ProductContext';
import { RelatedProducts } from '../relatedproducts/RelatedProducts';
export const SingleProduct = () => {
  const { id } = useParams();
  const { fetchproduct, product } = useContext(ProductContext);
  fetchproduct(id);
  // console.log(product);
  const categoryName = product.category;
  // console.log(CategoryName);

  return (
    <div className='single-product-container'>
      <div className='single-product-title'>Single Product Page</div>
      <div className='product-detail-container'>
        <div className='product-detail-leftsid'>
          <div className='product-img-card'>
            <img src={product.thumbnail} alt='' />
          </div>
        </div>
        <div className='product-detail-rightsid'>
          <div className='product-title'>Name:{product.title}</div>
          <div className='product-desc'>Descibtion:{product.description}</div>
          <div className='Product-price'>PKR{product.price}/-</div>
          <div className='product-cart'>
            <div className='product-category-name'>
              category:{product.category}
            </div>
            <div className='product-category-btn'>ADD To Card</div>
          </div>
        </div>
      </div>
      <div className='related-product'>
        <RelatedProducts category={categoryName} />;
      </div>
    </div>
  );
};
