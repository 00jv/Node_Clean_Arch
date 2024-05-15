export type FildesError = {
  [field: string]: string[]
}

export interface ValidatorFields<PropsValidated> {
  errors: FildesError
  validatedData: PropsValidated
  validate(props: any): boolean
}
