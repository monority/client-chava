import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App';
import './assets/sass/main.scss'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Questions from './pages/Questions';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Check from './pages/Check';
import Profil from './pages/Profil';
import Login from './pages/Login';
import ScrollToTop from "./components/global/ScrollToTop";

const Root = () => {


	return (
		<BrowserRouter>
			<ScrollToTop>
			<Header />
				<Routes>
					<Route exact path="/account/check" element={< Check/>} />
					<Route exact path="/" element={<App />} />
					<Route exact path="/help/questions" element={<Questions />} />
					<Route exact path="/help/contact" element={<Contact />} />
					<Route exact path="/account/register" element={<Register />} />
					<Route exact path="/account/profil" element={<Profil />} />
				</Routes>
			<Footer />
			</ScrollToTop>
		</BrowserRouter>
	)
}

export default Root;

