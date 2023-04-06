import { createStore } from 'redux'
import { images } from '../constants'

const reducerFn = (
  state = {
    allProducts: [],
  },
  action
) => {
  if (action.type === 'NEW') return { allProducts: [...state.allProducts, action.payload] }

  return state
}

const store = createStore(reducerFn)

export default store
