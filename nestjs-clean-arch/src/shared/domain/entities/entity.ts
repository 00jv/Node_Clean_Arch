import { v4 as uuidv4 } from 'uuid'

export abstract class Entity<Props = any> {
  public readonly _id: string
  public readonly _props: Props

  constructor(props: Props, id?: string) {
    this._id = id || uuidv4()
    this._props = props
  }

  get id(): string {
    return this._id
  }

  get props(): Props {
    return this._props
  }

  toJSON(): Required<{ id: string } & Props> {
    return {
      id: this._id,
      ...this._props,
    } as Required<{ id: string } & Props>
  }

  // equals(entity: Entity<Props>): boolean {
  //   if (entity === null || entity === undefined) {
  //     return false
  //   }
  //   if (this === entity) {
  //     return true
  //   }
  //   if (!(entity instanceof Entity)) {
  //     return false
  //   }
  //   return this._id === entity._id
  // }
}
