export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const INC_ITEM = 'INC_ITEM'
export const DEC_ITEM = 'DEC_ITEM'

export const addToCart = (_id: String)=> ({
  type: ADD_TO_CART,
  payload: {
    _id
  }
})

export const removeFromCart = (_id: String)=> ({
  type: REMOVE_FROM_CART,
  payload: {
    _id
  }
})

export const incItem = (_id: String)=> ({
  type: INC_ITEM,
  payload: {
    _id
  }
})

export const decItem = (_id: String)=> ({
  type: DEC_ITEM,
  payload: {
    _id
  }
})

const initialState = {
  count:0,
  total:0,
  cart:[],
  amount:[]
}

export default function (state=initialState, action: {type: String, payload:{_id:string}}){
  switch (action.type){
    case ADD_TO_CART: {
      const newCount = state.count+1
      const newCart = [...state.cart, action.payload._id]
      const newAmount = [...state.amount, 1]
      return {...state, count:newCount, cart: newCart, amount: newAmount}
    }
    case REMOVE_FROM_CART:{
      const newCount = state.count-1
      const index = state.cart.indexOf(action.payload._id);
      if (index>-1){
        state.cart.splice(index, 1)
      }
      const newCart = [...state.cart, action.payload._id]
      return {...state, count:newCount, cart: newCart}
    }
    // case DEC_ITEM
    default :{
      return state
    }
  }
}