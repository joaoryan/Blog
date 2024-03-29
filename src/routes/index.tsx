import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Project } from '../pages/Project';
import { Profile } from '../pages/Profile';
import { Live } from '../pages/Lives';
import { Artigos } from '../pages/Artigos';
import { Page404 } from '../pages/Page404';
import Layout from '../pages/Layout';
import { TestTDD } from '../pages/Cards/DistLinux';

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path='/' element={<Artigos />} />
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

