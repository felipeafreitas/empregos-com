import React from 'react';
import Logo from '../img/empregos-logo.svg';
import {
	Navbar,
	Nav,
	NavDropdown,
	Form,
	FormControl,
	Button,
} from 'react-bootstrap';

export default function Header() {
	return (
		<header>
			<Navbar
				bg='transparent'
				expand='lg'
				className='container d-flex justify-content-between'
			>
				{/* <Navbar.Toggle aria-controls='basic-navbar-nav' /> */}

				<NavDropdown title='Menu' id='basic-nav-dropdown'>
					<NavDropdown.Item href='#action/3.1'>Vagas</NavDropdown.Item>
					<NavDropdown.Item href='#action/3.2'>Empresas</NavDropdown.Item>
					<NavDropdown.Item href='#action/3.3'>Currículos</NavDropdown.Item>
					<NavDropdown.Item href='#action/3.4'>Carreiras</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href='#action/3.4'>Conheça o site</NavDropdown.Item>
					<NavDropdown.Item href='#action/3.4'>
						Anunciar currículo
					</NavDropdown.Item>
					<NavDropdown.Item href='#action/3.4'>Ajuda</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href='#action/3.4'>
						<strong>RECRUTADOR: </strong>Clique aqui
					</NavDropdown.Item>
				</NavDropdown>
				{/* <Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<NavDropdown title='Menu' id='basic-nav-dropdown'>
							<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href='#action/3.4'>
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse> */}
				<Navbar.Brand href='#home'>
					<img alt='' src={Logo} className='d-inline-block align-top' />
				</Navbar.Brand>
				<Nav>
					{/* <Nav.Link href='#home'>EMPRESAS</Nav.Link>
					<Nav.Link href='#link'>CADASTRE-SE</Nav.Link> */}
					<button type='button' className='btn btn-outline-warning rounded-0'>
						ENTRE
					</button>
				</Nav>
			</Navbar>

			{/* SEARCH BAR */}
			<Navbar bg='warning' expand='lg'>
				<div className='container d-flex justify-content-center'>
					{/* <Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mr-auto'>
							<NavDropdown title='Busca por Currículos' id='basic-nav-dropdown'>
								<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.2'>
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.3'>
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='#action/3.4'>
									Separated link
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse> */}
					<Form inline className='d-flex flex-row flex-nowrap w-100'>
						<FormControl
							type='text'
							placeholder='Digite um cargo ou palavra-chave'
							className='mr-sm-2 w-100 m-1'
						/>
					</Form>
				</div>
			</Navbar>
		</header>
	);
}
