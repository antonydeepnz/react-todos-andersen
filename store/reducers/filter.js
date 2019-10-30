const initialState = {
  text: '',
  dateFrom: '2000-01-01',
  dateTo: '2050-12-31'
}

export default function filter(state = initialState, action){
  switch (action.type){
    case "SET_FILTER": {
      const data = action.filter;
      data.dateFrom === ''? data.dateFrom = '2000-01-01': data.dateFrom;
      data.dateTo === ''? data.dateTo = '2050-12-31': data.dateTo;
      const filterData = {
        text: data.text,
        dateFrom: data.dateFrom,
        dateTo: data.dateTo
      }
      return filterData;
      break;
    }
    case "CLEAR": {
      const newState = initialState;
      return newState;
      break;
    }
  }
  return state
}

