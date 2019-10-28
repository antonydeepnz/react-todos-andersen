const initialState = {
  text: '',
  dateFrom: '2000-01-01',
  dateTo: '2050-12-31'
}

export default function filtered(state = initialState, action){
  switch (action.type){
   /* case "SET_FILTER": {
      const data = action.payload;
      data.dateFrom === ''? data.dateFrom = '2000-01-01': data.dateFrom;
      data.dateTo === ''? data.dateTo = '2050-12-31': data.dateTo;
      const newState = {
        text: data.text,
        dateFrom: data.dateFrom,
        dateTo: data.dateTo
      }
      return newState;
      break;
    }*/
    case "CLEAR": {
      const newState = initialState;
      return newState;
      break;
    }
  }
  return state
}

