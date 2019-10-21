import defaultData from './defaultData'

const data = JSON.parse(localStorage.getItem('react-todo'));  

const initialState = () => {
  return data? [...data]: [...defaultData];
} 


export default function todos(state = initialState(), action){
  switch (action.type){
    case "ADD_TODO": 
      const newState = [...state, action.payload];
      localStorage.setItem('react-todo', JSON.stringify(newState));
      return newState;
      break;
    case "DELETE_TODO": 
      const newState = state.filter(item => item.key !== action.payload);
      localStorage.setItem('react-todo', JSON.stringify(newState));
      return newState;
      break;
    case "SET_CHECKED":
      console.log(action.payload);
      /const newState = state.filter(item => item.key !== action.payload);
      break;  
  }
  return state
}