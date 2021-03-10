import { Card } from 'react-bootstrap';

export default function Curriculum(props) {
	return (
		<div>
			<hr />
			<Card border='light'>
				<Card.Header>
					<a href='#'>
						<h5>Visualizar este currículo</h5>
					</a>
				</Card.Header>
				<Card.Body className='d-flex flex-row flex-wrap'>
					<div className='col-lg-8 col-sm-12'>
						<Card.Title>
							<strong>{props.titulo}</strong>
						</Card.Title>
						<Card.Text>
							<p>{props.subtitulo}</p>
							<p>{props.endereco}</p>
							<p>{props.ultimo}</p>
							<p>{props.descricao}</p>
						</Card.Text>
					</div>

					<div className='col-lg-4 col-sm-12'>
						<a href='/'>
							<ul className='list-group list-group-flush'>
								{props.cargos.map((element) => {
									return (
										<li className='list-group-item list-group-item-light'>
											{element}
										</li>
									);
								})}
							</ul>
							<p>
								<strong>Salário pretendido:</strong>
							</p>
							<p>{props.salario}</p>
							<p>
								<strong>Atualizado em:</strong>
								{props.atualizado}
							</p>
							<button type='button' class='btn btn-info'>
								Visualizar Currículo
							</button>
						</a>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
}
