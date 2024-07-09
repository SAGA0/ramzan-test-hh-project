import { FC } from 'react'
import { Props } from './types'
import { Card, Center, Flex, Image, Text } from '@mantine/core'
import { Link } from 'react-router-dom'

export const BeanCard: FC<Props> = ({
	flavorName,
	description,
	imageUrl,
	beanId,
}) => {
	return (
		<Card withBorder shadow="sm" maw={335} mih={350} radius="md">
			<Card.Section withBorder inheritPadding py="xs">
				<Center>
					<Link to={`${beanId}`} style={{ textDecoration: 'none' }}>
						<Text fw={500} c="black">
							{flavorName}
						</Text>
					</Link>
				</Center>
			</Card.Section>

			<Card.Section mt="sm">
				<Flex justify="center">
					<Image fallbackSrc={imageUrl} src={imageUrl} w={300} h={185} />
				</Flex>
			</Card.Section>

			<Text mt="sm" c="dimmed" size="sm">
				{description}
			</Text>
		</Card>
	)
}
