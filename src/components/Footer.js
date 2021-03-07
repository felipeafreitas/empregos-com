import Logo from '../img/empregos-logo.svg';
import {
	Navbar,
	Nav,
	NavDropdown,
	Form,
	FormControl,
	Button,
} from 'react-bootstrap';

export default function Footer() {
	return (
		<div>
        <div>
            <div>
                <p><strong>Navegue Rápido: </strong></p>
            </div>
            <div>
                <img alt='' src=''/>
            </div>
        </div>
			<div className='bg-light d-flex'>
				<div>
					<p><strong>Candidato</strong></p>
                    <a href='/'><p>Conheça o site</p></a>
                    <a href='/'><p>Cadastrar currículo</p></a>
                    <a href='/'><p>Depoimentos</p></a>
                    <a href='/'><p>Contrato de Serviços</p></a>
                    <a href='/'><p>Cobrança</p></a>
                    <a href='/'><p><strong>Busca de Vagas</strong></p></a>
                    <a href='/'><p>Vagas no seu e-mail</p></a>
                    <a href='/'><p><strong>Busca de Empresas</strong></p></a>
                    <a href='/'><p><strong>Busca de Currículos</strong></p></a>
				</div>
                <div>
					<p><strong>Central do Recrutador</strong></p>
                    <a href='/'><p>Anúncio de vagas sem custo</p></a>
                    <a href='/'><p>Depoimentos</p></a>
                    <a href='/'><p>Termos e condições de uso</p></a>
                    <a href='/'><p><strong>Busca de Currículos</strong></p></a>
				</div>
                <div>
					<p><strong>Carreiras</strong></p>
                    <a href='/'><p>Guia de Profissões</p></a>
                    <a href='/'><p>Guia de currículo</p></a>
                    <a href='/'><p>Carta de apresentação</p></a>
                    <a href='/'><p><strong>Pesquisa salarial</strong></p></a>
				</div>
                <div>
					<p><strong>Quem somos</strong></p>
                    <a href='/'><p>Imprensa</p></a>
                    <a href='/'><p>Publicidade</p></a>
                    <a href='/'><p>Comunicados e boletions</p></a>
				</div>
                <div>
					<p><strong>Prêmios</strong></p>
                    <a href='/'><p>Imprensa</p></a>
				</div>
			</div>
			<div className='d-flex flex-row justify-content-between'>
				<Navbar.Brand href='#home'>
					<img alt='' src={Logo} className='d-inline-block align-top' />
				</Navbar.Brand>
			</div>
		</div>
	);
}
