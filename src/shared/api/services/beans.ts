import { BASE_URL } from '../base'
import { Bean, BeansResponse } from './types'

class BeansService {
	async getAll(): Promise<BeansResponse> {
		const data = await fetch(`${BASE_URL}/beans`)

		const res = await data.json()

		return res
	}

	async loadMore(params: {
		currentPage: number
		pageSize: number
	}): Promise<BeansResponse> {
		const searchParams = params
			? `?pageIndex=${params.currentPage}&pageSize=${params.pageSize}`
			: ''

		const data = await fetch(`${BASE_URL}/beans${searchParams}`)

		const res = await data.json()

		return res
	}

	async getById(id: number): Promise<Bean> {
		const data = await fetch(`${BASE_URL}/beans/${id}`)

		const res = await data.json()

		return res
	}
}

export const beansService = new BeansService()
