import { BeansListWidget } from '@/widgets/beans-list'
import { Box, Center, Container, Title } from '@mantine/core'

const Main = () => {
	return (
		<Box w="100%">
			<Container pt={21}>
				<Center mb={50}>
					<Title>All beans</Title>
				</Center>
			</Container>

			<Box maw={1050} mx="auto" pb={24}>
				<BeansListWidget />
			</Box>
		</Box>
	)
}

export default Main
