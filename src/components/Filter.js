import FilterComponents from "./FilterComponents";

export default function Filter() {
	return (
		<div className='col-12 col-lg-3'>
			<div className='card text-white bg-dark mb-3'>
				<div className='card-header'>
					<strong>Busca Atual</strong>
				</div>
				<div className='card-body'>
					<p className='card-title'>Filtros Selecionados</p>
					<p className='card-text'>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
						<ul class='list-group list-group-flush'>
							<li class='list-group-item list-group-item-dark'>
								Todos os Curriculos
							</li>
						</ul>
					</p>
				</div>
			</div>
            <div>
                <h5><strong>Refine sua Busca:</strong></h5>
                <hr />
                <FilterComponents />
                <FilterComponents />
                <FilterComponents />
                <FilterComponents />
            </div>
		</div>
	);
}
