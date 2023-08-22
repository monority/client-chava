import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App';
import './assets/sass/main.scss'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Questions from './pages/Questions';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Profil from './pages/Profil';

const Root = () => {
	return (
		<BrowserRouter>
					<Header />

			<Routes>
				<Route exact path="/" element={<App />} />
				<Route exact path="/help/questions" element={<Questions />} />
				<Route exact path="/help/contact" element={<Contact />} />
				<Route exact path="/account/create" element={<Register />} />
				<Route exact path="/account/profil" element={<Profil />} />
				<Route exact path="/account/Login" element={<Login />} />
			</Routes>
			<Footer/>
		</BrowserRouter>
	)
}

export default Root;