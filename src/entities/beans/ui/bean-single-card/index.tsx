import { FC } from 'react'
import { Props } from './types'
import {
	Badge,
	Button,
	Card,
	Center,
	Divider,
	Flex,
	Image,
	List,
	Text,
	Title,
} from '@mantine/core'
import { Link } from 'react-router-dom'

export const BeanSingleCard: FC<Props> = ({ data }) => {
	return (
		<Card withBorder shadow="sm" w={835} radius="md">
			<Card.Section withBorder inheritPadding py="xs">
				<Center>
					<Title fw={500} order={2} c="black">
						{data.flavorName}
					</Title>
				</Center>
			</Card.Section>

			<Card.Section mt="sm" p={32}>
				<Flex justify="center">
					<Image
						fallbackSrc={data.imageUrl}
						src={data.imageUrl}
						w={400}
						h={200}
					/>
				</Flex>

				<Flex direction="column" gap={4}>
					<Text fw={500} size="md">
						Group name:
					</Text>

					<Flex gap={3}>
						{data.groupName.map((el) => (
							<Badge color="red" key={el}>
								{el}
							</Badge>
						))}
					</Flex>
				</Flex>

				<Divider color="red" my={30} />

				<Flex direction="column" gap={4}>
					<Text fw={500} size="md">
						Ingredients:
					</Text>

					<List>
						{data.ingredients.map((el) => (
							<List.Item c="red" key={el}>
								{el}
							</List.Item>
						))}
					</List>
				</Flex>

				<Divider color="red" my={30} />

				<Flex gap={16} justify="space-between">
					<Flex direction="column" gap={2}>
						<Text fw={500}>Color group:</Text>
						<Text c="red">{data.colorGroup}</Text>
					</Flex>

					<Flex direction="column" gap={2}>
						<Text fw={500}>Hexadecimal Color:</Text>
						<Badge size="lg" color={data.backgroundColor}>
							{data.backgroundColor}
						</Badge>
					</Flex>

					<Flex direction="column" gap={2}>
						<Text fw={500}>Bean ID:</Text>
						<Text c="red">{data.beanId}</Text>
					</Flex>

					<Flex direction="column" gap={2}>
						<Text fw={500}>Kosher:</Text>
						<Text c="red">{data.kosher ? 'Yes' : 'No'}</Text>
					</Flex>
				</Flex>

				<Flex justify="space-between" mt={30}>
					<Flex direction="column" gap={2}>
						<Text fw={500}>Seasonal:</Text>
						<Text c="red">{data.seasonal ? 'Yes' : 'No'}</Text>
					</Flex>
					<Flex direction="column" gap={2}>
						<Text fw={500}>Gluten Free:</Text>
						<Text c="red">{data.glutenFree ? 'Yes' : 'No'}</Text>
					</Flex>
					<Flex direction="column" gap={2}>
						<Text fw={500}>Sugar Free:</Text>
						<Text c="red">{data.sugarFree ? 'Yes' : 'No'}</Text>
					</Flex>
				</Flex>
			</Card.Section>

			<Card.Section inheritPadding mt="sm" pb="md">
				<Link to="/">
					<Button bg="red">Back to beans</Button>
				</Link>
			</Card.Section>
		</Card>
	)
}
