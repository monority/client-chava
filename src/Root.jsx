import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import './assets/sass/main.scss'

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { UserContextProvider } from '../context/userContext';

import ScrollToTop from "./components/global/ScrollToTop";
import Questions from './pages/support/Questions';
import Politics from './pages/support/Politics'
import Support from './pages/support/Support';
import Register from './pages/account/Register';
import Check from './pages/account/Check';
import ServicesList from './pages/Services/ServicesList';
import Login from './pages/account/Login';
import UsersDetails from './pages/account/UsersDetails';
import RegisterPetSitter from './pages/account/RegisterPetSitter'
import Home from './pages/Home';
import Administration from './pages/admin/Administration'; import Profile from './pages/account/Profile';
import Burger from './components/header/Burger';
import Homes from './pages/Homes';

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

const Root = () => {
	return (
		<BrowserRouter>
			<UserContextProvider>
				<ScrollToTop>
					<Header />
					<Burger />
					<Toaster position='bottom-right' toastOptions={{
						duration: 2000,
						className: 'toast-options',
					}} />
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/homes" element={<Homes />} />
						<Route exact path="/help/questions" element={<Questions />} />
						<Route exact path="/help/politics" element={<Politics />} />
						<Route exact path="/help/support" element={<Support />} />
						<Route exact path="/account/register" element={<Register />} />
						<Route exact path="/account/becomepetsitter" element={<RegisterPetSitter />} />
						<Route exact path="/account/administration" element={<Administration />} />
						<Route exact path="/account/check" element={< Check />} />
						<Route exact path="/account/login" element={< Login />} />
						<Route exact path="/account/:id" element={< Profile />} />
						<Route exact path="/services" element={<ServicesList />} />
						<Route exact path="/users/:id" element={<UsersDetails />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</UserContextProvider>
		</BrowserRouter>
	)
}

export default Root;

