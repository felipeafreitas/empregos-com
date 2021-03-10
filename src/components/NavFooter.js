import React from 'react';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram (3).png';
import linkedin from '../img/linkedin.png';
import twitter from '../img/twitter.png';

export default function NavFooter() {
	return (
		<nav>
			<div className='d-flex flex-row justify-content-between align-items-center mt-3'>
				<div className='align-items-center'>
					<strong>Navegue Rápido: </strong>
				</div>
				<div>
					<img
						alt='facebook'
						src={facebook}
						style={{ width: '32px' }}
						className='m-2'
					/>
					<img
						alt='instagram'
						src={instagram}
						style={{ width: '32px' }}
						className='m-2'
					/>
					<img
						alt='twitter'
						src={twitter}
						style={{ width: '32px' }}
						className='m-2'
					/>
					<img
						alt='linkedin'
						src={linkedin}
						style={{ width: '32px' }}
						className='m-2'
					/>
				</div>
			</div>
			<hr />
			<div className='d-flex flex-wrap'>
				<div className='col'>
					<p>
						<strong>Candidato</strong>
					</p>
					<a href='/'>
						<p>Conheça o site</p>
					</a>
					<a href='/'>
						<p>Cadastrar currículo</p>
					</a>
					<a href='/'>
						<p>Depoimentos</p>
					</a>
					<a href='/'>
						<p>Contrato de Serviços</p>
					</a>
					<a href='/'>
						<p>Cobrança</p>
					</a>
					<a href='/'>
						<p>
							<strong>Busca de Vagas</strong>
						</p>
					</a>
					<a href='/'>
						<p>Vagas no seu e-mail</p>
					</a>
					<a href='/'>
						<p>
							<strong>Busca de Empresas</strong>
						</p>
					</a>
					<a href='/'>
						<p>
							<strong>Busca de Currículos</strong>
						</p>
					</a>
				</div>
				<div className='col'>
					<p>
						<strong>Central do Recrutador</strong>
					</p>
					<a href='/'>
						<p>Anúncio de vagas sem custo</p>
					</a>
					<a href='/'>
						<p>Depoimentos</p>
					</a>
					<a href='/'>
						<p>Termos e condições de uso</p>
					</a>
					<a href='/'>
						<p>
							<strong>Busca de Currículos</strong>
						</p>
					</a>
				</div>
				<div className='col'>
					<p>
						<strong>Carreiras</strong>
					</p>
					<a href='/'>
						<p>Guia de Profissões</p>
					</a>
					<a href='/'>
						<p>Guia de currículo</p>
					</a>
					<a href='/'>
						<p>Carta de apresentação</p>
					</a>
					<a href='/'>
						<p>
							<strong>Pesquisa salarial</strong>
						</p>
					</a>
				</div>
				<div className='col'>
					<p>
						<strong>Quem somos</strong>
					</p>
					<a href='/'>
						<p>Imprensa</p>
					</a>
					<a href='/'>
						<p>Publicidade</p>
					</a>
					<a href='/'>
						<p>Comunicados e boletions</p>
					</a>
				</div>
				<div className='col'>
					<p>
						<strong>Prêmios</strong>
					</p>
					<a href='/'>
						<p>Imprensa</p>
					</a>
				</div>
			</div>
		</nav>
	);
}
