import { Entity } from '@/shared/domain/entities/entity'

export type UserProps = {
  name: string
  email: string
  password: string
  createdAt?: Date
}

export class UserEntity extends Entity<UserProps> {
  private _name: string
  private _email: string
  private _password: string
  private _createdAt: Date

  constructor(
    public readonly _props: UserProps,
    id?: string,
  ) {
    super(_props, id)
    this._name = _props.name
    this._email = _props.email
    this._password = _props.password
    this._createdAt = _props.createdAt || new Date()
  }

  update(value: string): void {
    this._name = value
  }

  updatePassword(value: string): void {
    this._password = value
  }

  get name(): string {
    return this._name
  }

  private set name(name: string) {
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

  private set password(password: string) {
    this._password = password
  }

  get createdAt(): Date {
    return this._createdAt
  }
}
