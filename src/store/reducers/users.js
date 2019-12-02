import {normalizedUsers} from '../../fixtures'

const initialState = normalizedUsers.reduce((users, user) => {
  return {
    ...users,
    [users.id]: user,
  }
}, {})

export const usersReducer = (usersState = initialState, action) => {
  return usersState
}
