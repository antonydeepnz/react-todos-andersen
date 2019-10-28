export const setFilter = (state, filterData) => ({
  type: 'SET_FILTER',
  payload: filterData
})

export const clearFilter = (state) => ({
  type: 'SET_FILTER'
})
