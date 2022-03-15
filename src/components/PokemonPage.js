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

	const addNewPokemon = (pokemonData) => {
		const dataToSend = {
			...pokemonData,
			sprites: { front: pokemonData.frontUrl, back: pokemonData.backUrl },
		};
		delete dataToSend.frontUrl;
		delete dataToSend.backUrl;

		const configObj = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(dataToSend),
		};

		fetch('http://localhost:3001/pokemon', configObj)
			.then((r) => r.json())
			.then((pokemon) => setPokemon((mUV) => [...mUV, pokemon]));
	};

	return (
		<Container>
			<h1>Pokemon Searcher</h1>
			<br />
			<PokemonForm addNewPokemon={addNewPokemon} />
			<br />
			<Search search={search} handleSearch={handleSearch} />
			<br />
			<PokemonCollection pokemon={displayedPokemon()} />
		</Container>
	);
}

export default PokemonPage;
