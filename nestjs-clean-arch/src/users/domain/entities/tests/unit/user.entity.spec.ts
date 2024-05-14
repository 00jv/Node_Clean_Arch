import { UserEntity, UserProps } from '../../user.entity'
import { UserDataBuilder } from '../../testing/helper/user-data-builder'
describe('UserEntity', () => {
  let props: UserProps
  let sut: UserEntity

  beforeEach(() => {
    props = UserDataBuilder({})

    sut = new UserEntity(props)
  })
  it('Construtor method', () => {
    expect(sut).toBeDefined()
    expect(sut.name).toEqual(props.name)
    expect(sut.email).toEqual(props.email)
    expect(sut.password).toEqual(props.password)
    expect(sut.createdAt).toBeInstanceOf(Date)
  })

  it('Getters', () => {
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

  it('Setters of name', () => {
    sut['name'] = 'new name'

    expect(sut.name).toEqual('new name')
    expect(typeof sut.name).toBe('string')
  })

  it('Setters of email', () => {
    sut.email = 'new email'

    expect(sut.email).toEqual('new email')
    expect(typeof sut.email).toBe('string')
  })

  it('Setters of password', () => {
    sut['password'] = 'new password'
    expect(sut.password).toEqual('new password')
    expect(typeof sut.password).toBe('string')
  })

  it('UpdateName method', () => {
    sut.update('new name')
    expect(sut.name).toEqual('new name')
  })

  it('UpdatePassword method', () => {
    sut.updatePassword('new password')
    expect(sut.password).toEqual('new password')
  })
})
