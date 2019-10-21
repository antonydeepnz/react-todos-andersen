const data = JSON.parse(localStorage.getItem('react-todo'));  

const initialState = () => {
  return data? [...data]: [...defaultData];
} 

export default function filtered(state=initialState(), action){
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