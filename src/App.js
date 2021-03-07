import Header from './components/Header';
import Filter from './components/Filter';
import Results from './components/Results';
import Footer from './components/Footer';
import Title from './components/Title';

import './index.css'

function App() {
	return (
		<div>
			<Header />
			<div className='container'>
				<Title />
				<div className='d-flex flex-wrap'>
					<Filter />
					<Results />
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
