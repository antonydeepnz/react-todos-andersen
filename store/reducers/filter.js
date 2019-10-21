const initialState = {
  text: '',
  dateFrom: '',
  dateTo: ''
}

export default function filtered(state = initialState, action){
  switch (action.type){
    case "FILTER": {
      const data = action.payload;
      console.log(data);
      const newState = {
        text: data.text,
        dateFrom: data.dateFrom,
        dateTo: data.dateTo
      } 
      return newState;
    }
    case "CLEAR": {
      const newState = initialState;
      return newState;
    }
  }
  return state
}

