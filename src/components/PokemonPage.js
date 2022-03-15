import React, { useState, useEffect } from 'react';
import PokemonCollection from './PokemonCollection';
import PokemonForm from './PokemonForm';
import Search from './Search';
import { Container } from 'semantic-ui-react';

function PokemonPage() {
	const [pokemon, setPokemon] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		fetch('http://localhost:3001/pokemon')
			.then((res) => res.json())
			.then((pokemon) => setPokemon(pokemon));
	}, []);

	function handleSearch(event) {
		return setSearch(event.target.value);
	}

	const displayedPokemon = () => {
		return pokemon.filter((p) => p.name.includes(search.toLowerCase()));
	};

	return (
		<Container>
			<h1>Pokemon Searcher</h1>
			<br />
			<PokemonForm />
			<br />
			<Search search={search} handleSearch={handleSearch} />
			<br />
			<PokemonCollection pokemon={displayedPokemon()} />
		</Container>
	);
}

export default PokemonPage;
