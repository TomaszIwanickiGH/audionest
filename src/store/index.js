import { createStore } from 'redux'

const reducerFn = (
  state = {
    allProducts: [],
  },
  action
) => {
  if (action.type === 'NEW') return { allProducts: [...state.allProducts, action.payload] }
  if (action.type === 'DEL') return { allProducts: state.allProducts.filter((item) => item.id !== action.payload) }

  return state
}

const store = createStore(reducerFn)

export default store
