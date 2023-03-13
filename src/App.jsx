import Search from './Components/Search/Search';
import { GlobalStyles } from './Styles/GlobalStyles';
import { useAxios } from './Hooks/useAxios';
import Cards from './Components/Cards/Cards';
import Loader from './Components/Loader/Loader';

function App() {
	const { data, loader, error, handleSubmit } = useAxios();

	return (
		<>
			<h1>Rick and Morty</h1>
			<h3>Ingrese un número</h3>

			<Search handleSubmit={handleSubmit} />
			{loader && <Loader />}
			{error && <h2 style={{ color: ' #ff0000' }}>{error}</h2>}
			{data && <Cards {...data} />}
			<GlobalStyles />
		</>
	);
}

export default App;
