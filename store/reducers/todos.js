import defaultData from './defaultData'

const data = JSON.parse(localStorage.getItem('react-todo'));  

const initialState = () => {
  return data? [...data]: [...defaultData];
} 


export default function todos(state = initialState(), action){
  switch (action.type){
    case "ADD_TODO": {
      const newState = [...state, action.payload];
      localStorage.setItem('react-todo', JSON.stringify(newState));
      return newState;
      break;
    }
    case "DELETE_TODO": {
      const newState = state.filter(item => item.key !== action.payload);
      localStorage.setItem('react-todo', JSON.stringify(newState));
      return newState;
      break;
    }
    case "SET_CHECKED": {
      const newState = state.slice();
      const index = newState.findIndex(item => item.key === action.payload);
      if(index !== -1){
        newState[index].isComplete = !newState[index].isComplete; 
      }
      localStorage.setItem('react-todo', JSON.stringify(newState));
      return newState;
      break;
    }
    case "SORT_BY_TEXT": {
      const direction = action.payload;
      const newState = state.slice();
      if(direction === true){
        newState.sort((a,b) => {
          if(a.text.toLowerCase() < b.text.toLowerCase()) { return -1; }
          if(a.text.toLowerCase() > b.text.toLowerCase()) { return 1; }
          return 0;
        })
        
      } else 
        newState.sort((a,b) => {
            if(a.text.toLowerCase() > b.text.toLowerCase()) { return -1; }
            if(a.text.toLowerCase() < b.text.toLowerCase()) { return 1; }
            return 0;
          })
      return newState;
    }
    case "SORT_BY_DATE": {
      const direction = action.payload;
      const newState = state.slice();
      if(direction === true){
        newState.sort((a,b) => {
          return new Date(a.date) - new Date(b.date)
        })
      } else {
        newState.sort((a,b) => {
          return new Date(b.date) - new Date(a.date);
        })
      }
      return newState;
    }
    case "SET_FILTER": {
      return state.filter(item => {
        return item.text.toLowerCase().includes(state.filter.text) &&
          new Date(item.date) >= new Date(state.filter.dateFrom) &&
          new Date(item.date) <= new Date(state.filter.dateTo);
      })
    }     
  }
  return state
}