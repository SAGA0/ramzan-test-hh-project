import { lazy } from 'react'

const MainPage = lazy(() => import('./main'))
const DetailsPage = lazy(() => import('./details'))

export const routes = [
	{
		path: '/',
		Component: MainPage,
	},
	{
		path: '/:id',
		Component: DetailsPage,
	},
]
