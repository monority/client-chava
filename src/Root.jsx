import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './assets/sass/main.scss'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Questions from './pages/help/Questions';
import Politics from './pages/help/Politics'
import Support from './pages/help/Support';
import Register from './pages/account/Register';
import Check from './pages/account/Check';
import ServicesList from './pages/Services/ServicesList';
import Login from './pages/account/Login';
import UsersDetails from './pages/account/UsersDetails';
import ScrollToTop from "./components/global/ScrollToTop";
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext'
import RegisterPetSitter from './pages/account/RegisterPetSitter'
import Home from './pages/Home';
import Administration from './pages/account/Administration';import Profile from './pages/account/Profile';
import Burger from './components/header/Burger';

// et pour me faciliter la vie au lieu de taper l’url dans les parenthèse 
// je vais utiliser la propriete d’axios dans mon App.js le port est celui du backend
// cela evite de toujours devoir tout retaper on aura juste a ecrire le endpoint ex: /register
axios.defaults.baseURL = 'http://localhost:8000'
// Permet a cookieParser d'envoyer les tokkens coté front
axios.defaults.withCredentials = true

const Root = () => {
	return (
		<UserContextProvider>
			<ScrollToTop>
				<Header />
				<Burger/>
				<Toaster position='bottom-right' toastOptions={{ 
					duration: 2000,
					className: 'toast-options',
					}}/>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/help/questions" element={<Questions />} />
					<Route exact path="/help/politics" element={<Politics />} />
					<Route exact path="/help/support" element={<Support />} />
					<Route exact path="/account/register" element={<Register />} />
					<Route exact path="/account/becomepetsitter" element={<RegisterPetSitter />} />
					<Route exact path="/account/administration" element={<Administration />} />
					<Route exact path="/account/check" element={< Check />} />
					<Route exact path="/account/login" element={< Login />} />
					<Route exact path="/account/profile/:id" element={< Profile />} />
					<Route exact path="/services" element={<ServicesList />} />
					<Route exact path="/users/:id" element={<UsersDetails />} />
				</Routes>
				<Footer />
			</ScrollToTop>
		</UserContextProvider>
	)
}

export default Root;

