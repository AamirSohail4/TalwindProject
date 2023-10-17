import { Navbar } from '../layout/navbar/Navbar';
import { Outlet } from 'react-router-dom';
export const FrontEndLayout = () => {
  return (
    <>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='layout'>
        <Outlet />
      </div>
    </>
  );
};
