/// <reference types="@directus/extensions/api.d.ts" />
import { defineOperationApi } from '@directus/extensions-sdk'

import type { SandboxOperationConfig } from 'directus:api'

import { nanoid } from './nanoid'

type Options = {
	seed: string,
	prefix: string,
	suffix: string,
	length: number,
}

const operation: SandboxOperationConfig = {
	id: 'operation-nanoid',
	handler: ({ seed, prefix, suffix, length }) => {		
		return (prefix || '') + nanoid(seed, length)() + (suffix || '')
	},
}

export default defineOperationApi<Options>(operation)
