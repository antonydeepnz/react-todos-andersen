const initialState = {
  text: '',
  dateFrom: '2000-01-01',
  dateTo: '2050-12-31'
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
      //const newState = state;
      return newState;
    }
    case "CLEAR": {
      const newState = initialState;
      return newState;
    }
  }
  return state
}

