import '../../Styles/Reset.scss'
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { changeViewThemas } from "../../Redux/Reducer/View";
import { GlobalStyles } from "../Theme/GlobalStyles";
import { darkTheme, lightTheme } from "../Theme/Themes";
import MainPage from '../../Pages/MainPage/MainPage';


function App() {
	const dispath = useDispatch()
	const theme = useSelector(state => state.ViewReducer.themes)
	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<>
				<GlobalStyles />
				<div className="App">
					<MainPage />
				</div>
			</>
		</ThemeProvider>
	);
}

export default App;
