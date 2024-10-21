const random = (bytes: number) => crypto.getRandomValues(new Uint8Array(bytes))

export const nanoid = (seed: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_', length: number = 21) => {
	let mask = (2 << Math.log(seed.length - 1) / Math.LN2) - 1
	let step = Math.ceil(1.6 * mask * length / seed.length)

	return (size = length): string => {
		let n = ''

		while (true) {
			let b = random(step)
			let j = step

			while (j--) {
				n += seed[b[j]! & mask] || ''
				if (n.length === size) return n
			}
		}
	}
}
