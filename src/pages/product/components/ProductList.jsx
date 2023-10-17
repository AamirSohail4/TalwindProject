import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../style.css';

export const ProductList = ({ data }) => {
  return (
    <>
      {data?.map((item) => {
        return (
          <Link to={`/shop/${item.id}`} key={item.id} className='products-cart'>
            <div className='card-image'>
              <img src={item.thumbnail} alt='' />
            </div>

            <div className='cardinfo'>
              <h3>{item.title.slice(0, 10)}</h3>
              <h5>PKR {item.price} /-</h5>
            </div>
            <div className='desc'>{item.desc}</div>
            <button className='cart'>Add to Cart</button>
          </Link>
        );
      })}
    </>
  );
};
ProductList.propTypes = {
  data: PropTypes.any,
};
