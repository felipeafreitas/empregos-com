import FilterComponents from './FilterComponents';
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import CurrentSearch from './CurrentSearch';

export default function Filter() {
	return (
		<div className='col-12 col-lg-3'>
			<CurrentSearch />
			<Navbar bg='light' expand='lg' className='d-flex flex-column'>
				<Navbar.Brand href='#home'>
					<strong>Refine sua Busca:</strong>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto d-flex flex-column'>
						<FilterComponents />
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}
