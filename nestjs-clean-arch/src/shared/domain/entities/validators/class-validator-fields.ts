import { validateSync } from 'class-validator'
import { FieldesError, ValidatorFields } from './validator-fields.interface'

export abstract class ClassValidatorFields<PropsValidated>
  implements ValidatorFields<PropsValidated>
{
  errors: FieldesError = {}
  validatedData: PropsValidated = null
  validate(props: any): boolean {
    const errors = validateSync(props)
    if (errors.length > 0) {
      errors.forEach(error => {
        const property = error.property
        const constraints = error.constraints
        if (constraints) {
          this.errors[property] = Object.values(constraints)
        }
      })
      return false
    }
    this.validatedData = props
    return true
  }
}
