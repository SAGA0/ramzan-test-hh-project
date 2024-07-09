import { create } from 'zustand'
import { BeansStore } from './types'
import { beansService } from '@/shared'

export const useBeansStore = create<BeansStore>((set, get) => ({
	beans: {
		bean: null,
		items: [],
		totalCount: 0,
		pageSize: 10,
		currentPage: 1,
		totalPages: 0,
	},

	isLoading: false,
	isLoadingMore: false,

	getAllBeans() {
		set((prev) => ({ ...prev, isLoading: true }))

		beansService.getAll().then((res) => {
			set((prev) => ({
				...prev,
				isLoading: false,
				beans: {
					...res,
					bean: null,
				},
			}))
		})
	},

	getBeanById(id: number) {
		set((prev) => ({ ...prev, isLoading: true }))

		beansService.getById(id).then((res) => {
			set((prev) => ({
				...prev,
				isLoading: false,
				beans: {
					...prev.beans,
					bean: res,
				},
			}))
		})
	},

	loadMoreBeans() {
		set((prev) => ({ ...prev, isLoadingMore: true }))

		const { currentPage, pageSize } = get().beans

		beansService
			.loadMore({ currentPage: currentPage + 1, pageSize })
			.then((res) => {
				set((prev) => ({
					...prev,

					isLoadingMore: false,

					beans: {
						...prev.beans,
						currentPage: res.currentPage,
						totalCount: res.totalCount,
						items: [...prev.beans.items, ...res.items],
					},
				}))
			})
	},
}))
