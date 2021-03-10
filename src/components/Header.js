import React from 'react';
import MainNav from './MainNav';
import Searchbar from './Searchbar';

export default function Header() {
	return (
		<header className='sticky-top'>
			<MainNav />
			<Searchbar />
		</header>
	);
}
