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
    const name = faker.person.fullName()
    const email = faker.internet.email()
    const password = faker.internet.password()
    const createdAt = faker.date.recent()

    sut.name = name
    sut.email = email
    sut.password = password
    sut.createdAt = createdAt

    expect(sut.name).toEqual(name)
    expect(sut.email).toEqual(email)
    expect(sut.password).toEqual(password)
    expect(sut.createdAt).toEqual(createdAt)
  })
})
