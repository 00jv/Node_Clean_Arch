import { faker } from '@faker-js/faker'
import { UserEntity, UserProps } from '../../user.entity'
describe('UserEntity', () => {
  let props: UserProps
  let sut: UserEntity

  beforeEach(() => {
    props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      createdAt: faker.date.recent(),
    }

    sut = new UserEntity(props)
  })
  it('Construtor method', () => {
    expect(sut).toBeDefined()
    expect(sut.name).toEqual(props.name)
    expect(sut.email).toEqual(props.email)
    expect(sut.password).toEqual(props.password)
    expect(sut.createdAt).toBeInstanceOf(Date)
  })

  it('Getters and Setters', () => {
    expect(sut.name).toBeDefined()
    expect(sut.email).toBeDefined()
    expect(sut.password).toBeDefined()
    expect(sut.createdAt).toBeDefined()

    expect(sut.name).toEqual(props.name)
    expect(sut.email).toEqual(props.email)
    expect(sut.password).toEqual(props.password)
    expect(sut.createdAt).toEqual(props.createdAt)

    expect(typeof sut.name).toBe('string')
    expect(typeof sut.email).toBe('string')
    expect(typeof sut.password).toBe('string')
    expect(sut.createdAt).toBeInstanceOf(Date)
  })
})
