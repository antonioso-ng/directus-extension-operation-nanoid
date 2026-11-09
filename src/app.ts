import { defineOperationApp } from '@directus/extensions-sdk'
import { DEFAULT_ALPHABET, generateNanoid } from './nanoid'

export default defineOperationApp({
	id: 'operation-nanoid',
	name: 'NanoID',
	icon: 'numbers',
	description: 'Generate a NanoID',
	overview: ({ seed = DEFAULT_ALPHABET, prefix, suffix, length = 21 }) => {
		const id = generateNanoid(seed, length)

		return [
			{
				label: 'ID',
				text: id === null
					? 'Alphabet must contain between 1 and 256 characters.'
					: (prefix || '') + id + (suffix || ''),
			},
		]
	},
	options: [
		{
			field: 'seed',
			name: 'Seed',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input'
			},
			schema: {
				default_value: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'
			},
		},
		{
			field: 'prefix',
			name: 'Prefix',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'input',
			},
			schema: {
				default_value: ''
			},
		},
		{
			field: 'suffix',
			name: 'Suffix',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'input'
			},
			schema: {
				default_value: ''
			},
		},
		{
			field: 'length',
			name: 'Length',
			type: 'integer',
			meta: {
				width: 'half',
				interface: 'input'
			},
			schema: {
				default_value: 21
			},
		}
	],
});
