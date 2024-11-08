import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ProjectList } from '../pages/ProjectList';
import { Profile } from '../pages/Profile';
import { Artigos } from '../pages/Artigos';
import { Page404 } from '../pages/Page404';
import Layout from '../pages/Layout';
import { DistroLinux } from '../pages/Cards/DistLinux';

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path='/' element={<Artigos />} />
					<Route path='profile' element={<Profile />} />
					<Route path='projectList' element={<ProjectList />} />
					<Route path='distroLinux' element={<DistroLinux />} />
					<Route path="*" element={<Page404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRoutes;

