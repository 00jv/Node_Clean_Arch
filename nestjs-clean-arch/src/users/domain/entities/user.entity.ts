export type UserProps = {
  name: string
  email: string
  password: string
  createdAt?: Date
}

export class UserEntity {
  private _name: string
  private _email: string
  private _password: string
  private _createdAt: Date

  constructor(public readonly props: UserProps) {
    this._name = props.name
    this._email = props.email
    this._password = props.password
    this._createdAt = props.createdAt || new Date()
  }

  get name(): string {
    return this._name
  }

  set name(name: string) {
    this._name = name
  }

  get email(): string {
    return this._email
  }

  set email(email: string) {
    this._email = email
  }

  get password(): string {
    return this._password
  }

  set password(password: string) {
    this._password = password
  }

  get createdAt(): Date {
    return this._createdAt
  }

  set createdAt(createdAt: Date) {
    this._createdAt = createdAt
  }
}
