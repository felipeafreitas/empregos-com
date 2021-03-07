import { Card } from 'react-bootstrap';

export default function Curriculum() {
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
							<strong>PROFESSOR DE ANATOMIA</strong>
						</Card.Title>
						<Card.Text>
							<p>Superior completo (Enfermagem)</p>
							<p>Limeira - SP</p>
							<p>
								Último emprego: Professora - Confidencial Educação/ Treinamento/
								Idiomas
							</p>
							<p>
								Gostaria de atuar na área da saúde, onde eu possa por meio das
								minhas atividades desempenhadas que possa contribuir com o meu
								desenvolvimento profissional. Ainda não tenho experiência sólida
								nesta área devido ao direcionamento que tive em minha carreira
								atuando como docente em colégio técnico.
							</p>
						</Card.Text>
					</div>

					<div className='col-lg-4 col-sm-12'>
						<a href='/'>
							<ul className='list-group list-group-flush'>
								<li className='list-group-item list-group-item-light'>
									Professor de Anatomia
								</li>
								<li className='list-group-item list-group-item-light'>
									Professor de Enfermagem
								</li>
								<li className='list-group-item list-group-item-light'>
									Professor de Podologia
								</li>
							</ul>
							<p>
								<strong>Salário pretendido:</strong>
							</p>
							<p>R$3.000,00</p>
							<p>
								<strong>Atualizado em:</strong> 07/03/2021
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
