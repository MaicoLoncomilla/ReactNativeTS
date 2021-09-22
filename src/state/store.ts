import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import { models, RootModel } from './models'

export const Store = init({ models })

export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>
