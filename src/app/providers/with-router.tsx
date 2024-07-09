import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const withRouterProvider = (component: () => ReactNode) => () => {
	return <BrowserRouter>{component()}</BrowserRouter>
}
