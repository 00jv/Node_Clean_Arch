export type FieldesError = {
  [field: string]: string[]
}

export interface ValidatorFields<PropsValidated> {
  errors: FieldesError
  validatedData: PropsValidated
  validate(props: any): boolean
}
