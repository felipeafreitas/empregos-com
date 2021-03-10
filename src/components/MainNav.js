import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import Logo from '../img/empregos-logo.svg';

export default function MainNav() {
	return (
		<Navbar
			bg='white'
			expand='lg'
			className='container d-flex justify-content-between'
		>
			<NavDropdown title='Menu' id='basic-nav-dropdown' className=''>
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
			<Navbar.Brand href='/' className=''>
				<img
					alt=''
					src={Logo}
					className='d-inline-block align-top'
					style={{ width: '160px' }}
				/>
			</Navbar.Brand>
			<Nav className=''>
				<button type='button' className='btn btn-outline-warning rounded-0'>
					ENTRE
				</button>
			</Nav>
		</Navbar>
	);
}
