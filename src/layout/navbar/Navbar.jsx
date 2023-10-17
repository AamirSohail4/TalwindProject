import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './styles/navbar.css';

export const Navbar = () => {
	return (
		<div className='main-header'>
			<div className='Logo'>
				<Icon icon='tabler:brand-nem' />
				ClickyBrand
			</div>
			<div className='nav-left'>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/product'>Product</Link>
					</li>

					<li>
						<Link to='/category'>Category</Link>
					</li>
				</ul>
			</div>
			<div className='nav-right'>
				<div className='social-icon'>
					<span>
						<Icon icon='solar:heart-linear' />
					</span>
					<span>
						<Icon icon='bytesize:cart' />
					</span>
					<span>
						<Icon icon='circum:search' />
					</span>
				</div>
			</div>
		</div>
	);
};
