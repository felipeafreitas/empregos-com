import Curriculum from './Curriculum';
import data from '../data/data';
import React, { useState } from 'react';
import Pagination from './Pagination';

export default function Results() {
	const [curriculos, setCurriculos] = useState(data);

	console.log(curriculos[0]);

	return (
		<div className='col-12 col-lg-9'>
			{curriculos.map((element) => {
				return (
					<Curriculum
						titulo={element.titulo}
						subtitulo={element.subtitulo}
						endereco={element.endereco}
						ultimo={element.ultimo}
						descricao={element.descricao}
						cargos={element.cargos}
						salario={element.salario}
						atualizado={element.atualizado}
					/>
				);
			})}
			<Pagination />
		</div>
	);
}
