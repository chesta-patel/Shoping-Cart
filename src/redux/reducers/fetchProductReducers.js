const initialData = {
  productList: [],
}
const fetchProductReducers = (state = initialData, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCT':
      const { data } = action.payload
      return {
        ...state,
        productList: data,
      }
    default:
      return state
  }
}

export default fetchProductReducers
