export default function t(state=['dfdsfdf','dsfdsfdsf','dsfsdfsdf'],action){
  switch (action.type){
    case "ADD_TODO": {
      return [
        ...state,
        action.payload
      ]
    }
  }
  return state
}