import Logo from '../img/empregos-logo.svg';
import certificate from '../img/certificado-seguranca-thawte.gif';
import NavFooter from './NavFooter';

export default function Footer() {
	return (
		<div className='bg-light d-flex'>
			<div className='container'>
				<NavFooter />
				<hr />
				<div className='d-flex flex-row justify-content-center align-items-center mt-3 mb-3 flex-wrap'>
					<img alt='' src={Logo} className='d-inline-block align-top' />
					<div className='text-center'>
						Copyright © 1998-2021 Empregos.com.br. Todos os direitos reservados.
					</div>
					<div className='d-flex'>
						<a href='/'>Privacidade</a>|<a href='/'>Ajuda</a>|
						<a href='/'>Mapa do Site</a>
					</div>
					<img alt='certificate' src={certificate} />
				</div>
			</div>
		</div>
	);
}
