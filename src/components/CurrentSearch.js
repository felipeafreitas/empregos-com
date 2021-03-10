import React from 'react';

export default function CurrentSearch() {
	return (
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
	);
}
