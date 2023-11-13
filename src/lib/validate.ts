/**
 * Validates a CUPS code
 * @param {string} cups CUPS code to validate
 * @returns {boolean} true if the CUPS code is valid, false otherwise
 */
export default function validate(cups: string): boolean {
  let result = false

  const regex = /^[A-Z]{2}(\d{4}\d{12})([A-Z]{2})(\d[FPCRXYZ])?$/i

  if (regex.test(cups)) {
    const parts = cups.match(regex) ?? []
    const [_, supplyPoint, control] = parts
    // prettier-ignore
    const controlChars = [
			'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D',
			'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L',
			'C', 'K', 'E',
		]

    const ccCount = controlChars.length // 23
    const divisor = ccCount ** 2 // 529
    const dividend = parseInt(supplyPoint, 10)

    const modulo = dividend % divisor
    const quotient = Math.floor(modulo / ccCount)
    const remainder = modulo % ccCount

    result = control === controlChars[quotient] + controlChars[remainder]
  }

  return result
}
