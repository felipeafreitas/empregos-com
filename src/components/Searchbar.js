import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

export default function Searchbar() {
	return (
		<Navbar bg='warning' expand='lg'>
			<div className='container d-flex justify-content-center'>
				<Form inline className='d-flex flex-row flex-nowrap w-100'>
					<FormControl
						type='text'
						placeholder='Digite um cargo ou palavra-chave'
						className='mr-sm-2 w-100 m-1'
					/>
				</Form>
			</div>
		</Navbar>
	);
}
