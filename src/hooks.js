// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'
import { hashPassword, protect } from '@feathersjs/authentication-local'

export default {
  around: {
    all: [],
    find: [authenticate('jwt')],
    get: [authenticate('jwt')],
    create: [hashPassword('password')],
    update: [hashPassword('password')],
    patch: [hashPassword('password'), authenticate('jwt')],
    remove: [authenticate('jwt')]
  },
  before: {

  },
  after: {
    all: [protect("password")]
  },
  error: {
    all: []
  }
}

