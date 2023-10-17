import './style.css';
import cate from '../../assets/tops.jpg';
import { useContext } from 'react';
import { CategoryContext } from '../../context/CategoryContext';
import { Link } from 'react-router-dom';
export const Category = () => {
  const { categories } = useContext(CategoryContext);
  return (
    <div className='home-top-category'>
      <div className='head-container'>
        <h2>Top Category</h2>
      </div>
      <div className='Category-content'>
        {categories?.map((category, index) => (
          <Link
            to={`/shop/category/${category}`}
            key={index}
            className='Category-card'
          >
            <div className='card-image'>
              <img src={cate} alt='' />
            </div>
            <div className='cardinfo'>
              <h3>{category}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
