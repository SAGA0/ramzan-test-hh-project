import { Bean } from '@/shared/api/services/types'

export type Props = Pick<
	Bean,
	'flavorName' | 'imageUrl' | 'description' | 'beanId'
>
