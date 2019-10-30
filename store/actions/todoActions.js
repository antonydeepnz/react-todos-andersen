export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  payload: todo
})

export const deleteTodo = (key) => ({
  type: 'DELETE_TODO',
  payload: key
})

export const setChecked = (key) => ({
  type: 'SET_CHECKED',
  payload: key
})

export const sortByText = (direction) => ({
  type: 'SORT_BY_TEXT',
  payload: direction
})

export const sortByDate = (direction) => ({
  type: 'SORT_BY_DATE',
  payload: direction
})
