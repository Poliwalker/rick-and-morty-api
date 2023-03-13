import React, { useState } from 'react';
import { InputSearch, ButtonSearch, FormSearch } from './SearchStyle';

const Search = ({ handleSubmit }) => {
	const [personaje, setPersonaje] = useState('');

	return (
		<FormSearch
			onSubmit={(e) => {
				handleSubmit(e, personaje);
				set([]);
			}}
		>
			<InputSearch
				type="text"
				placeholder="Search"
				value={personaje}
				onChange={(e) => setPersonaje(e.target.value)}
			/>
			<ButtonSearch type="submit">Buscar</ButtonSearch>
		</FormSearch>
	);
};

export default Search;
