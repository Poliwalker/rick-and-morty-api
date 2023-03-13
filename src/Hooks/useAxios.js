import axios from 'axios';
import { useState } from 'react';

export const useAxios = () => {
	const [data, setData] = useState(null);
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(false);

	const handleSubmit = async (e, personaje) => {
		e.preventDefault();

		setData(null);
		setError(false);
		setLoader(true);

		try {
			let selectedPersonaje = personaje.toLowerCase().trim();

			const { data } = await axios.get(
				`https://rickandmortyapi.com/api/character/${selectedPersonaje}`
			);

			setData(data);
		} catch (error) {
			setError('no se encontró el personaje');
		}
		setLoader(false);
	};

	return { data, loader, error, handleSubmit };
};
