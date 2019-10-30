export const setFilter = (filterData) => ({
  type: "SET_FILTER", 
  filter: filterData
})

export const clearFilter = () => ({
  type: 'CLEAR'
})
