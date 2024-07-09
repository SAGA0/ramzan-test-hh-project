import { BeanCard, useBeansStore } from '@/entities'
import { Box, Center, Grid, Loader } from '@mantine/core'
import { randomId } from '@mantine/hooks'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export const BeansListWidget = () => {
	const { getAllBeans, loadMoreBeans, isLoading, isLoadingMore, beans } =
		useBeansStore()

	const { ref, inView } = useInView({
		threshold: 0.5,
	})

	useEffect(() => {
		getAllBeans()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		if (inView) {
			loadMoreBeans()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inView])

	if (isLoading) {
		return (
			<Center>
				<Loader color="red" size="md" />
			</Center>
		)
	}

	return (
		<Box>
			<Grid>
				{beans.items.map((el) => (
					<Grid.Col span={4} key={el.beanId + randomId()}>
						<BeanCard
							flavorName={el.flavorName}
							imageUrl={el.imageUrl}
							beanId={el.beanId}
							description={el.description}
						/>
					</Grid.Col>
				))}

				{beans.totalPages === beans.currentPage ||
				isLoading ||
				beans.items.length === 0 ? null : (
					<div ref={ref} />
				)}
			</Grid>
			{isLoadingMore ? (
				<Center mt={30}>
					<Loader color="red" />
				</Center>
			) : null}
		</Box>
	)
}
