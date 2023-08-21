import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App';
import './assets/sass/main.scss'
import Header from './components/header/Header';
import Questions from './pages/Questions';

const Root = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route exact path="/" element={<App />} />
				<Route exact path="/questions" element={<Questions />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Root;