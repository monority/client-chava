import Preloader from "./components/global/Preloader";
import Home from "./pages/Home";
Preloader
const App = () => {
	const hasAnimationShown = localStorage.getItem('animationShown');
	return (
		<>
			{!hasAnimationShown ?
				<Preloader></Preloader> : ""}
			<Home />
		</>
	)
}


export default App;
