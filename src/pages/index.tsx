import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import { Suspense } from 'react'
import { Flex, Loader } from '@mantine/core'

export const Router = () => {
	return (
		<Routes>
			{routes.map(({ path, Component }) => (
				<Route
					key={path}
					path={path}
					element={
						<Suspense
							fallback={
								<Flex w="100vw" h="100vh" align="center" justify="center">
									<Loader color="red" />
								</Flex>
							}
						>
							<Component />
						</Suspense>
					}
				/>
			))}
		</Routes>
	)
}
