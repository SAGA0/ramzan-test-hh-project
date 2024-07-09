import { ReactNode } from 'react'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

export const withMantineProvider = (component: () => ReactNode) => () => {
	return <MantineProvider>{component()}</MantineProvider>
}
