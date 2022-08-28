import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Project } from '../pages/Project';
import { Profile } from '../pages/Profile';
import { Serie } from '../pages/Serie';
import { Home } from '../pages/Home';
import { Page404 } from '../pages/Page404';
import Layout from '../pages/Layout';

const AppRoutes = () => {
	return (
		<BrowserRouter>
		<Routes>
			<Route path="/" element={<Layout/>}>
			<Route path='home' element={<Home />} />
			<Route path='profile' element={<Profile />} />
			<Route path='serie' element={<Serie />} />
			<Route path='project' element={<Project />} />   
			</Route>
		</Routes>
		</BrowserRouter>
	)
}

export default AppRoutes;

