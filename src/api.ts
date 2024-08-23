import { defineOperationApi } from '@directus/extensions-sdk'
import { customAlphabet } from 'nanoid'

type Options = {
	seed: string,
	prefix: string,
	suffix: string,
	length: number,
}

export default defineOperationApi<Options>({
	id: 'operation-nanoid',
	handler: ({ seed = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_', prefix, suffix, length = 21 }) => {		
		return (prefix || '') + customAlphabet(seed, length)() + (suffix || '')
	},
})
