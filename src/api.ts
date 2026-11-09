import { defineOperationApi } from '@directus/extensions-sdk'
import { DEFAULT_ALPHABET, generateNanoid } from './nanoid'

type Options = {
	seed: string,
	prefix: string,
	suffix: string,
	length: number,
}

export default defineOperationApi<Options>({
	id: 'operation-nanoid',
	handler: ({ seed = DEFAULT_ALPHABET, prefix, suffix, length = 21 }) => {
		const id = generateNanoid(seed, length)

		if (id === null) throw new Error('Alphabet must contain between 1 and 256 characters.')

		return (prefix || '') + id + (suffix || '')
	},
})
