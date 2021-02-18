const pokedex = document.getElementById('pokedex');

const fetchPokemons = async () => {
	for (let i = 1; i <= 150; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async id => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	const pokemon = await res.json();
	nuevoPokemon(pokemon);
};

function nuevoPokemon(pokemon) {
	const cartaPokemon = document.createElement('div');
	cartaPokemon.classList.add('card');
	cartaPokemon.classList.add('mb-3');
	cartaPokemon.style.width = "300px";
/*
	const cartaInnerHTML = `
		  <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
		  <div class="card-body">
			<span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
            <h3 class="name">${pokemon.name}</h3>
		  </div>
    `;
*/
	
	const cartaInnerHTML = `
			<div class="row g-0">
				<div class="col-md-4" style:"float:right">
					<img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" width="100" height="100">
				</div>
				<div class="col-md-8">
					<div class="card-body" >
						<span class="number">#${pokemon.id.toString	().padStart(3, '0')}</span>
						<h3 class="name">${pokemon.name}</h3>
					</div>
				</div>
			</div>
    `;

	cartaPokemon.innerHTML = cartaInnerHTML;
	pokedex.appendChild(cartaPokemon);
}

fetchPokemons();
