import { validate as uuidValidate } from 'uuid'
import { Entity } from '../../entity'

type StubProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<StubProps> {}

describe('Entity', () => {
  it('should be defined', () => {
    const props = { prop1: 'prop1', prop2: 1 }
    const entity = new StubEntity(props)

    expect(entity._props).toStrictEqual(props)
    expect(entity._id).not.toBeNull()
    expect(uuidValidate(entity._id)).toBeTruthy()
  })

  it('should be defined with id', () => {
    const props = { prop1: 'prop1', prop2: 1 }
    const id = '7de0973a-dbdc-4ba9-a129-170dd96c7a01'
    const entity = new StubEntity(props, id)

    expect(uuidValidate(entity._id)).toBeTruthy()
    expect(entity._props).toStrictEqual(props)
    expect(entity._id).toBe(id)
  })

  it('Should convert a entity to json', () => {
    const props = { prop1: 'prop1', prop2: 1 }
    const entity = new StubEntity(props)

    const json = entity.toJSON()

    expect(json).toStrictEqual({ id: entity._id, ...props })
  })
})
