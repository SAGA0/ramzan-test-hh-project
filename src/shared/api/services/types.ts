export type Bean = {
	beanId: number
	flavorName: string
	imageUrl: string
	description: string
	groupName: string[]
	ingredients: string[]
	colorGroup: string
	backgroundColor: string
	glutenFree: boolean
	sugarFree: boolean
	seasonal: boolean
	kosher: boolean
}

export type BeansResponse = {
	items: Bean[]
	totalCount: number
	pageSize: number
	currentPage: number
	totalPages: number
}
