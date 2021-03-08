import Header from './components/Header';
import Filters from './components/Filters';
import Results from './components/Results';
import Footer from './components/Footer';
import Title from './components/Title';

import './index.css';

function App() {
	return (
		<div>
			<Header />
			<div className='container'>
				<Title />
				<div className='d-flex flex-wrap'>
					<Filters />
					<Results />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
