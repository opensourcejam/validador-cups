import validate from './validate'

describe('Validate', () => {
  describe('Invalid values', () => {
    const notDefined = undefined
    const notValue = NaN
    const notIdentification = null
    const smallerPattern = 'ES'
    const largerPattern = 'ES 0987 5432 1098 7654 7654 ZF'
    const wrongNaturalPattern = 'ES 0987 5432 1098 7653 ZF'

    it.each([
      { cups: notDefined, expected: false },
      { cups: notValue, expected: false },
      { cups: notIdentification, expected: false },
      { cups: smallerPattern, expected: false },
      { cups: largerPattern, expected: false },
      { cups: wrongNaturalPattern, expected: false },
    ])(
      'should return false when the value is invalid',
      ({ cups, expected }) => {
        // eslint-disable-next-line
        expect(validate(cups as any)).toBe(expected)
      },
    )
  })

  describe('Validate values', () => {
    const clientPoint = 'ES 0987 5432 1098 7654 ZF'
    const fronteraPoint = 'ES 1234 1234 5678 9012 JY 1 F'
    const mainMeasuringPointBoundary = 'ES 1234 1234 5678 9012 JY 1 P'
    const measuringPointVoucher = 'ES 9750 2109 8765 4321 CQ 1 C'
    const registratorPoint = 'ES 0999 1100 1234 5678 EK 1 X'

    it.each([
      { cups: clientPoint, expected: true },
      { cups: fronteraPoint, expected: true },
      { cups: mainMeasuringPointBoundary, expected: true },
      { cups: measuringPointVoucher, expected: true },
      { cups: registratorPoint, expected: true },
    ])('should return true when the value is valid', ({ cups, expected }) => {
      expect(validate(cups)).toBe(expected)
    })
  })
})
