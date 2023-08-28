import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App';
import './assets/sass/main.scss'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Questions from './pages/help/Questions';
import Contact from './pages/help/Contact';
import Register from './pages/authentification/Register';
import Check from './pages/authentification/Check';
import Users from './pages/users/Users';
import Login from './pages/authentification/Login';
import UsersDetails from './pages/users/UsersDetails';
import ScrollToTop from "./components/global/ScrollToTop";
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext'

// et pour me faciliter la vie au lieu de taper l’url dans les parenthèse 
// je vais utiliser la propriete d’axios dans mon App.js le port est celui du backend
// cela evite de toujours devoir tout retaper on aura juste a ecrire le endpoint ex: /register
axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

const Root = () => {


	return (
		<UserContextProvider>

			<ScrollToTop>
				<Header />
				<Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />

				<Routes>
					<Route exact path="/" element={<App />} />
					<Route exact path="/help/questions" element={<Questions />} />
					<Route exact path="/help/contact" element={<Contact />} />
					<Route exact path="/account/register" element={<Register />} />
					<Route exact path="/account/check" element={< Check />} />
					<Route exact path="/account/login" element={< Login />} />
					<Route exact path="/users" element={<Users />} />
					<Route exact path="/users/:id" element={<UsersDetails />} />
				</Routes>
				{/* <Footer /> */}
			</ScrollToTop>
		</UserContextProvider>

	)
}

export default Root;

