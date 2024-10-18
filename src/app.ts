import { defineOperationApp } from '@directus/extensions-sdk'
import { customAlphabet } from 'nanoid'

export default defineOperationApp({
	id: 'operation-nanoid',
	name: 'NanoID',
	icon: 'numbers',
	description: 'Generate a NanoID',
	overview: ({ seed = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_', prefix, suffix, length = 21 }) => [
		{
			label: 'ID',
			text: (prefix || '') + customAlphabet(seed, length)() + (suffix || ''),
		},
	],
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
