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

const Root = () => {


	return (
		<BrowserRouter>
			<ScrollToTop>
			<Header />
				<Routes>
					<Route exact path="/" element={<App />} />
					<Route exact path="/help/questions" element={<Questions />} />
					<Route exact path="/help/contact" element={<Contact />} />
					<Route exact path="/account/register" element={<Register />} />
					<Route exact path="/account/check" element={< Check/>} />
					<Route exact path="/account/login" element={< Login/>} />
					<Route exact path="/users" element={<Users />} />
					<Route exact path="/users/:id" element={<UsersDetails />} />
				</Routes>
			{/* <Footer /> */}
			</ScrollToTop>
		</BrowserRouter>
	)
}

export default Root;

