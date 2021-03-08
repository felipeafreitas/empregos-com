import FilterComponents from './FilterComponents';
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

export default function Filter() {
	return (
		<div className='col-12 col-lg-3'>
			<div className='card text-white bg-dark mb-3'>
				<div className='card-header'>
					<strong>Busca Atual</strong>
				</div>
				<div className='card-body'>
					<p className='card-title'>Filtros Selecionados</p>
					<p className='card-text'>
						<ul className='list-group list-group-flush rounded'>
							<li className='list-group-item list-group-item-dark'>
								Todos os Curriculos
							</li>
						</ul>
					</p>
				</div>
			</div>
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
