import { customAlphabet } from 'nanoid'

export const DEFAULT_ALPHABET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'

export function generateNanoid(alphabet: string, length: number): string | null {
	if (!alphabet || alphabet.length > 256) return null

	return customAlphabet(alphabet, length)()
}
