import { createModel } from '@rematch/core'
import { UserClass } from '../../type/user'

export const user = createModel<any>()({
  state: new UserClass(),
  reducers: {
    setUser(state, payload) {
      return {
        ...state,
        ...payload,
      }
    },
  },
})
