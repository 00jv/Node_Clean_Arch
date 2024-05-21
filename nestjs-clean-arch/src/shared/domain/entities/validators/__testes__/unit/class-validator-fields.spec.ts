import { ClassValidatorFields } from '../../class-validator-fields'
import * as libClassValidator from 'class-validator'

class StubClassValidatorFields extends ClassValidatorFields<{
  field: string
}> {}

describe('ClassValidatorFields unit tests', () => {
  it('should initialize errors and validatedData as null', () => {
    const sut = new StubClassValidatorFields()

    expect(sut.errors).toStrictEqual({})
    expect(sut.validatedData).toBeNull()
  })

  it('should validate with errors', () => {
    const spyValidateSync = jest.spyOn(libClassValidator, 'validateSync')

    spyValidateSync.mockReturnValue([
      {
        property: 'field',
        constraints: {
          isRequired: 'field is required',
        },
      },
    ] as any[])

    const sut = new StubClassValidatorFields()

    expect(sut.validate(null)).toBeFalsy()
    expect(spyValidateSync).toHaveBeenCalled()
    expect(sut.validatedData).toBeNull()
    expect(sut.errors).toStrictEqual({ field: ['field is required'] })
  })
})
