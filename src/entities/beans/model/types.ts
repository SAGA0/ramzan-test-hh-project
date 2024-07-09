import { Bean, BeansResponse } from '@/shared/api/services/types'

export type BeansStore = {
	beans: BeansResponse & {
		bean: null | Bean
	}

	isLoading: boolean
	isLoadingMore: boolean

	getAllBeans(): void
	getBeanById(id: number): void
	loadMoreBeans(): void
}
