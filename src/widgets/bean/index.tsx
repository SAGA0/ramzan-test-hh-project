import { BeanSingleCard, useBeansStore } from '@/entities'
import { Alert, Flex, Loader } from '@mantine/core'
import { IconInfoCircle } from '@tabler/icons-react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const BeanWidget = () => {
	const { pathname } = useLocation()

	const id = pathname.split('/')[1]

	const { getBeanById, isLoading, beans } = useBeansStore()

	useEffect(() => {
		if (id) {
			getBeanById(Number(id))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (isLoading) {
		return (
			<Flex w="100vw" h="100vh" align="center" justify="center">
				<Loader color="red" />
			</Flex>
		)
	}

	if (!beans.bean) {
		return (
			<Flex w="100vw" h="100vh" align="center" justify="center">
				<Alert
					variant="light"
					color="blue"
					title="Alert title"
					icon={<IconInfoCircle />}
				>
					Nothing found
				</Alert>
			</Flex>
		)
	}

	return (
		<Flex py={30} justify="center">
			<BeanSingleCard data={beans.bean} />
		</Flex>
	)
}
