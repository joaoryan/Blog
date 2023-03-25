import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Project } from '../pages/Project';
import { Profile } from '../pages/Profile';
import { Live } from '../pages/Lives';
import { Home } from '../pages/Home';
import { Page404 } from '../pages/Page404';
import Layout from '../pages/Layout';
import { TestTDD } from '../pages/Cards/TestTDD';

const AppRoutes = () => {
	return (
		<BrowserRouter>
		<Routes>
			<Route path="/" element={<Layout/>}>
			<Route path='home' element={<Home />} />
			<Route path='profile' element={<Profile />} />
			<Route path='lives' element={<Live />} />
			<Route path='project' element={<Project />} /> 
			<Route path='testTDD' element={<TestTDD />} />
			</Route>
		</Routes>
		</BrowserRouter>
	)
}

export default AppRoutes;

