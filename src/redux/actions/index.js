export const fetchProduct = (data) => {
  return {
    type: 'FETCH_PRODUCT',
    payload: {
      data,
    },
  }
}
