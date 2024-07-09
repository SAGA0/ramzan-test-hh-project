import compose from 'compose-function'
import { withMantineProvider } from './with-mantine'
import { withRouterProvider } from './with-router'

export const withProviders = compose(withRouterProvider, withMantineProvider)
